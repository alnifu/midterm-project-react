import React, { useContext } from 'react';
import InventoryContext from './Inventory';

const DisplayItems = () => {
  const { items } = useContext(InventoryContext);

  return (
    <div className="container">
      <h2>All Items</h2>
      {items.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in inventory</p>
      )}
    </div>
  );
};

export default DisplayItems;