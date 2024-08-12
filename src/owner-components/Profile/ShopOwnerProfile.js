import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShopOwnerProfileRefresh from './ShopOwnerProfileRefresh';
import './styles/shop-owner-profile.css';

const ShopOwnerProfile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('You have not logged in');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/shop-owners-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
        setMessage('You have not logged in');
      }
    };

    fetchUser();
  }, []);

  if (message) {
    return (
      <div className="not-logged-in">
        <p>{message}</p>
        <Link to="/shop-owners-login" className="login-button">Login</Link>
      </div>
    );
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
      <ShopOwnerProfileRefresh user={user} setUser={setUser} />
  );
};

export default ShopOwnerProfile;
