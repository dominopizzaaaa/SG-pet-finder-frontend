import React from 'react';
import { Link } from 'react-router-dom';
import './styles/services.css'; // Ensure this file exists for services specific styles

// Import images
import petSuppliesImage from '../../../images/pet-shop.jpeg';
import tipsAndTricksImage from '../../../images/tips-and-tricks.jpeg';
import forumImage from '../../../images/community-forum.jpeg';
import eventsImage from '../../../images/events.jpeg';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service-item">
          <img src={petSuppliesImage} alt="Pet Supplies Shop" className="service-image" />
          <h3>Pet Supplies Shop</h3>
          <p>Comprehensive shop for everything you need for your pet. All in one.</p>
          <Link to="/petsupplies" className="service-button">Shop Now</Link>
        </div>
        <div className="service-item">
          <img src={tipsAndTricksImage} alt="Tips & Tricks for First-Time Owners" className="service-image" />
          <h3>Tips & Tricks for First-Time Owners</h3>
          <p>Comprehensive guidance and resources needed to provide optimal care for their furry companions.</p>
          <Link to="/tips-and-tricks" className="service-button">Read More</Link>
        </div>
        <div className="service-item">
          <img src={forumImage} alt="Pet Owners' Community Forum" className="service-image" />
          <h3>Pet Owners' Community Forum</h3>
          <p>Provides a vibrant and supportive community space for pet enthusiasts to share experiences and seek advice.</p>
          <Link to="/forum" className="service-button">Join the Chat</Link>
        </div>
        <div className="service-item">
          <img src={eventsImage} alt="Events" className="service-image" />
          <h3>Events</h3>
          <p>Provides a vibrant and supportive community space for pets to play together and have fun together.</p>
          <Link to="/events" className="service-button">Join Now!</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
