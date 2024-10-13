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
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input type="text" id="id" className="form-control" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button className="btn btn-danger mt-3" onClick={handleRemoveItem}>Remove Item</button>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default RemoveItem;