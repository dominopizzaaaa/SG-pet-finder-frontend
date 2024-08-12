import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/followersFollowing.css';

const FollowersFollowing = ({ title, users, onClose }) => {
  const navigate = useNavigate();

  const handleViewProfile = (userId) => {
    onClose();
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username}
              <button onClick={() => handleViewProfile(user._id)}>View Profile</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowersFollowing;
