import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style.css';

const BookingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Client Details</h1>
      <form className="booking-form">
        <div className="form-group">
          <label>Already have an account? <a href="/login">Log in</a> for faster booking.</label>
        </div>
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" name="phone" placeholder="Phone" />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Add a Message"></textarea>
        </div>
        <h2>Payment</h2>
        <div className="form-group">
          <label>Service Name</label>
          <select name="service">
            <option value="pay-now">Pay now</option>
          </select>
        </div>
        <div className="booking-summary">
          <h2>Booking Details</h2>
          <p>Service Name</p>
          <p>Date and Time</p>
          <p>Location</p>
          <p>Staff</p>
          <p>1 hr</p>
          <h2>Payment Details</h2>
          <p>Total: $10</p>
        </div>
        <button className="book-now-button" type="submit">Book Now</button>
      </form>
      <div className="cancellation-policy">
        <h2>Cancellation Policy</h2>
        {/* Add cancellation policy details here */}
      </div>
    </div>
  );
};

export default BookingDetails;
