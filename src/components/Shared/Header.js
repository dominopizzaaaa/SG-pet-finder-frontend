import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import logo from '../../images/icon.png'; // Import the logo image

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink exact="true" to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/shop" className="nav-link" activeClassName="active">Shop</NavLink>
        <NavLink to="/forum" className="nav-link" activeClassName="active">Forum</NavLink>
        <NavLink to="/events" className="nav-link" activeClassName="active">Events</NavLink>
      </nav>
      <div className="nav-icons">
        <div className="icons">
          <NavLink to="/cart"><i className="fas fa-shopping-bag"></i></NavLink>
        </div>
        <div 
          className="icons profile-dropdown" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/profile"><i className="fas fa-user"></i></NavLink>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
              <NavLink to="/bookings" className="dropdown-item">My Bookings</NavLink>
              <NavLink to="/orders" className="dropdown-item">My Orders</NavLink>
              <NavLink to="/events" className="dropdown-item">Events</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
