import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const SearchItem = () => {
  const { items } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearchItem = () => {
    const item = items.find(item => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div className="container">
      <h2>Search Item</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button className="btn btn-primary" onClick={handleSearchItem}>Search</button>
      {message && <p>{message}</p>}
      {foundItem && (
        <div>
          <h3>Item Details</h3>
          <p>ID: {foundItem.id}</p>
          <p>Name: {foundItem.name}</p>
          <p>Quantity: {foundItem.quantity}</p>
          <p>Price: {foundItem.price}</p>
          <p>Category: {foundItem.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;