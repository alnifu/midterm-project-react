
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItems from './components/DisplayItems';
import DisplayItemsByCategory from './components/DisplayItemsByCategory';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import LowStockItems from './components/LowStockItems';
import { InventoryProvider } from './components/Inventory';

const App = () => {
  return (
    <InventoryProvider>
      <Router>
        <div className="container">
          <h1 className="my-4">Inventory Management System</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/add" className="btn btn-primary mx-1">Add Item</NavLink>
            <NavLink to="/update" className="btn btn-secondary mx-1">Update Item</NavLink>
            <NavLink to="/remove" className="btn btn-danger mx-1">Remove Item</NavLink>
            <NavLink to="/displayCat" className="btn btn-info mx-1">Display By Category</NavLink>
            <NavLink to="/display" className="btn btn-warning mx-1">Display All Items</NavLink>
            <NavLink to="/search" className="btn btn-success mx-1">Search Item</NavLink>
            <NavLink to="/sort" className="btn btn-dark mx-1">Sort Items</NavLink>
            <NavLink to="/low-stock" className="btn btn-light mx-1">Low Stock Items</NavLink>
          </nav>
          
          <Routes>
            <Route path="/add" element={<AddItem />} />
            <Route path="/update" element={<UpdateItem />} />
            <Route path="/remove" element={<RemoveItem />} />
            <Route path="/displayCat" element={<DisplayItemsByCategory />} />
            <Route path="/display" element={<DisplayItems />} />
            <Route path="/search" element={<SearchItem />} />
            <Route path="/sort" element={<SortItems />} />
            <Route path="/low-stock" element={<LowStockItems />} />
            <Route path="/" element={<AddItem />} />
          </Routes>
        </div>
      </Router>
    </InventoryProvider>
  );
};

export default App;
