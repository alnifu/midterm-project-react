import React, { useState, createContext } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <InventoryContext.Provider value={{ items, setItems }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext; 