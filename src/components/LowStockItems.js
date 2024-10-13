import React, { useContext } from 'react';
import InventoryContext from './Inventory';

const LowStockItems = () => {
  const { items } = useContext(InventoryContext);

  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="container">
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map(item => (
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
        <p>No low stock items</p>
      )}
    </div>
  );
};

export default LowStockItems;