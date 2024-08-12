import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProfileRefresh from './ProfileRefresh';
import FollowersFollowing from './FollowersFollowing';
import './styles/profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('You have not logged in');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/profile`, {
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

  const handleCloseModal = () => {
    setShowFollowers(false);
    setShowFollowing(false);
  };

  if (message) {
    return (
      <div className="not-logged-in">
        <p>{message}</p>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    );
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-content">
        <ProfileRefresh user={user} setUser={setUser} />
      </div>
      {showFollowers && (
        <FollowersFollowing
          title="Followers"
          users={user.followers}
          onClose={handleCloseModal}
        />
      )}
      {showFollowing && (
        <FollowersFollowing
          title="Following"
          users={user.following}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Profile;
