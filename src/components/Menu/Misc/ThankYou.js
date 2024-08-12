import React from 'react';
import './styles/thank-you.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <h1>Thank you, Customer Name</h1>
      <p>You'll receive a confirmation email soon.</p>
      <p>Order number: 10000</p>
      <div className="order-summary">
        <div className="order-item">
          <h2>Product Name</h2>
          <p>Qty: 1</p>
          <p>$50.00</p>
          <ul>
            <li>Product option 1</li>
            <li>Product option 2</li>
            <li>Product option 3</li>
          </ul>
        </div>
        <div className="order-item">
          <h2>Service Name</h2>
          <p>$60.00</p>
          <p>Date and time</p>
          <p>Duration</p>
          <p>Staff member</p>
          <p>Location</p>
          <button>Add to My Google Calendar</button>
        </div>
        <div className="order-summary-details">
          <p>Note: Your customer's note will show here.</p>
          <div className="order-totals">
            <p>Subtotal: $110.00</p>
            <p>Delivery: Free</p>
            <p>Sales Tax: $10.00</p>
            <h2>Total: $120.00</h2>
          </div>
        </div>
      </div>
      <div className="addresses">
        <div className="address">
          <h3>Delivery address</h3>
          <p>Customer Name</p>
          <p>Street, City, State Zip Code, Country</p>
          <p>Phone number</p>
          <p>3-5 Business Days</p>
        </div>
        <div className="address">
          <h3>Billing address</h3>
          <p>Customer Name</p>
          <p>Street, City, State Zip Code, Country</p>
          <p>Phone number</p>
        </div>
      </div>
      <a href="/">Continue Browsing</a>
    </div>
  );
};

export default ThankYou;
