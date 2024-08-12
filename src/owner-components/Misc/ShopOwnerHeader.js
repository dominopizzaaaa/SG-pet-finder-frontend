import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/ShopOwnerHeader.css'; // Ensure this path is correct

const ShopOwnerHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/shop-owners-login');
  };

  return (
    <header className="shop-owner-header">
      <nav>
        <ul>
          <li><Link to="/shop-owners-profile">Edit Profile</Link></li>
          <li><Link to="/shop-owners-listings">Manage Listings</Link></li>
          <li><Link to="/shop-owners-forums">Forums</Link></li>
          <li className="logout-button-container">
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ShopOwnerHeader;
