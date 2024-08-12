import React, { useState } from 'react';
import './styles/orders-section.css';

const OrdersSection = ({ orders }) => {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="orders-page">
      <h2 className="orders-title">MY ORDERS</h2>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          Current Orders
        </button>
        <button
          className={`tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous Orders
        </button>
      </div>
      <div className="orders-content">
        {orders[activeTab].map((order, index) => (
          <div key={index} className="order-item">
            <p>Item: {order.item}</p>
            <p>Price: {order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersSection;
