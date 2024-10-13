import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const DisplayItemsByCategory = () => {
  const { items } = useContext(InventoryContext);
  const [category, setCategory] = useState('Clothing');

  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className="container">
      <h2>Display Items by Category</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {filteredItems.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found in this category</p>
      )}
    </div>
  );
};

export default DisplayItemsByCategory;