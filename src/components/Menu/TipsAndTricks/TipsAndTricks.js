import React from 'react';
import { Link } from 'react-router-dom';
import './styles/tips-and-tricks.css';

const TipsAndTricks = () => {
  return (
    <div className="tips-and-tricks-page">
      <h1>Tips & Tricks for First-Time Owners</h1>
      <div className="tips-sections">
        <div className="tip-box">
          <h2>Basic Care Essentials</h2>
          <p>Hygiene Practices, Grooming Routines, and a Clean Living Environment</p>
        </div>
        <div className="tip-box">
          <h2>Training & Behaviour</h2>
          <p>Understand your pet’s behavior, Effective Training Techniques, and Common Behavioral Issues</p>
        </div>
        <div className="tip-box">
          <h2>Health & Wellness</h2>
          <p>Maintain your pet’s overall health and well-being with Veterinary Care, Vaccination Schedules, and Signs of Illness</p>
        </div>
        <div className="tip-box">
          <h2>Bonding & Enrichment</h2>
          <p>Make it fun! Click here to check the list and discover relevant information</p>
        </div>
      </div>
      <h1>Booking a Groomer</h1>
      <div className="groomer-booking">
        <div className="map-section">
          <img src="path/to/map-image.jpg" alt="Map" />
          <div className="service-details">
            <h2>Haircut</h2>
            <p>30 min</p>
            <p>US$35</p>
            <Link to="/booking-details" className="book-now-button">Book Now</Link> {/* Change this to a Link */}
          </div>
        </div>
        <div className="calendar-section">
          <h2>Service Name</h2>
          <p>Check out our availability and book the date and time that works for you</p>
          <div className="calendar">
            {/* Include your calendar component here */}
          </div>
          <div className="service-details">
            <h2>Service Details</h2>
            <p>Service Name: Haircut</p>
            <p>Duration: 30 min</p>
            <p>Price: US$35</p>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsAndTricks;
