import React from 'react';
import { Link } from 'react-router-dom';
import './styles/access-denied.css'; // Create this CSS file for styling

const AccessDenied = () => {
  return (
    <div className="access-denied-container">
      <h2>You have to be logged in to view this cute pet!</h2>
      <div className="access-denied-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default AccessDenied;
