import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const AddItem = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');

  const handleAddItem = () => {
    // Check for empty fields
    if (!id || !name || !quantity || !price) {
      setMessage('All fields are required.');
      return;
    }

    // Check for negative numbers
    if (parseInt(quantity) < 0 || parseFloat(price) < 0) {
      setMessage('Quantity and price must be non-negative.');
      return;
    }

    // Check for duplicate ID
    if (items.some(item => item.id === id)) {
      setMessage('Duplicate ID found. Please use a unique ID.');
      return;
    }

    const newItem = { id, name, quantity: parseInt(quantity), price: parseFloat(price), category };
    setItems([...items, newItem]);
    setMessage('Item added successfully!');
    setId(''); setName(''); setQuantity(''); setPrice(''); setCategory('Clothing');
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button className="btn btn-primary" onClick={handleAddItem}>Add Item</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddItem;
