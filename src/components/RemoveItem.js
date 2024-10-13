import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const RemoveItem = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveItem = () => {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
      setMessage('Item not found!');
      return;
    }

    const itemName = items[itemIndex].name;
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setMessage(`Item ${itemName} has been removed from the inventory`);
  };

  return (
    <div className="container">
      <h2>Remove Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button className="btn btn-danger" onClick={handleRemoveItem}>Remove Item</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;