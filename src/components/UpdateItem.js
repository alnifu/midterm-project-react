import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const UpdateItem = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateItem = () => {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
      setMessage('Item not found!');
      return;
    }

    // Check for negative quantity or price
    if ((field === 'quantity' && parseInt(newValue) < 0) || (field === 'price' && parseFloat(newValue) < 0)) {
      setMessage(`${field.charAt(0).toUpperCase() + field.slice(1)} must be non-negative.`);
      return;
    }

    const updatedItems = [...items];
    const oldValue = updatedItems[itemIndex][field];
    updatedItems[itemIndex][field] = field === 'quantity' ? parseInt(newValue) : parseFloat(newValue);
    setItems(updatedItems);
    setMessage(`The ${field} of Item ${updatedItems[itemIndex].name} is updated from ${oldValue} to ${newValue}`);
  };

  return (
    <div className="container">
      <h2>Update Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button className="btn btn-primary" onClick={handleUpdateItem}>Update Item</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
