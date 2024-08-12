import React from 'react';
import { Link } from 'react-router-dom';
import './styles/shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shop-title">What are you looking for?</h1>
      <div className="shop-links">
        <Link to="/puppies" className="shop-link">🐶 Puppies!! 🐶</Link>
        <Link to="/kittens" className="shop-link">🐱 Kittens!! 🐱</Link>
        <Link to="/petsupplies" className="shop-link">🦴 Pet Supply 🦴</Link>
      </div>
    </div>
  );
};

export default Shop;

