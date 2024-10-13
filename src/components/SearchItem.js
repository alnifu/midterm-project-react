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
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input type="text" id="id" className="form-control" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button className="btn btn-success mt-3" onClick={handleSearchItem}>Search</button>
      {message && <p className="mt-3">{message}</p>}
      {foundItem && (
        <div className="mt-3">
          <h3>Item Details</h3>
          <p><strong>ID:</strong> {foundItem.id}</p>
          <p><strong>Name:</strong> {foundItem.name}</p>
          <p><strong>Quantity:</strong> {foundItem.quantity}</p>
          <p><strong>Price:</strong> {foundItem.price}</p>
          <p><strong>Category:</strong> {foundItem.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;