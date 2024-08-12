import React from 'react';
import './styles/cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <h1>My cart</h1>
      <div className="cart-empty">
        <p>Cart is empty</p>
        <a href="/">Continue Browsing</a>
      </div>
    </div>
  );
};

export default Cart;
