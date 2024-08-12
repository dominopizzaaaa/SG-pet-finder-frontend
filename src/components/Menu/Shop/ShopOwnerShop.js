import React from 'react';
import './styles/shop-owner-shop.css';

const ShopOwnerShop = () => {
  return (
    <div className="shop-owner-shop">
      <h1 className="shop-owner-title">Shop Owner's Shop Page</h1>
      <p>Welcome to your shop page! Here you can manage your listings.</p>
      <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="google-form-link">
        Fill out this form to post a listing
      </a>
    </div>
  );
};

export default ShopOwnerShop;
