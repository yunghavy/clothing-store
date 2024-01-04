
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navbar-icons">
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
