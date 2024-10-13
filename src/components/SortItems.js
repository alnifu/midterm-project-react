import React, { useState, useContext } from 'react';
import InventoryContext from './Inventory';

const SortItems = () => {
  const { items } = useContext(InventoryContext);
  const [sortField, setSortField] = useState('quantity');
  const [sortOrder, setSortOrder] = useState('ascending');

  const sortedItems = [...items].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (sortOrder === 'ascending') {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  });

  return (
    <div className="container">
      <h2>Sort Items</h2>
<div className="form-group row">
  <div className="col-md-6">
    <select className="form-control" value={sortField} onChange={(e) => setSortField(e.target.value)}>
      <option value="quantity">Quantity</option>
      <option value="price">Price</option>
    </select>
  </div>
  <div className="col-md-6">
    <select className="form-control" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
</div>


      {sortedItems.length > 0 ? (
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
            {sortedItems.map(item => (
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
        <p>No items to display</p>
      )}
    </div>
  );
};

export default SortItems;