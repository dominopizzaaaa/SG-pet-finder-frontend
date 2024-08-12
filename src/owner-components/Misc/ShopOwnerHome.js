import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ShopOwnerHome.css';

const ShopOwnerHome = () => {
  return (
    <div className="shop-owner-home">
      <h2>Shop Owner Home</h2>
      <nav>
        <ul>
          <li><Link to="/shop-owners-profile">Edit Profile</Link></li>
          <li><Link to="/shop-owners-listings">Manage Listings</Link></li>
          <li><Link to="/shop-owners-forums">Forums</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ShopOwnerHome;
