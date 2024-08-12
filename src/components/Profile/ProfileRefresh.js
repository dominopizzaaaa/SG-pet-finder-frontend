import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import OrdersSection from './OrdersSection';
import EventSection from './EventSection';
import FollowersFollowing from './FollowersFollowing';
import './styles/profile.css';

const ProfileRefresh = ({ user, setUser }) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const handleShowFollowers = () => setShowFollowers(true);
  const handleShowFollowing = () => setShowFollowing(true);
  const handleCloseModal = () => {
    setShowFollowers(false);
    setShowFollowing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="profile-img" />
          ) : (
            <div className="initial">{user.username[0].toUpperCase()}</div>
          )}
        </div>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <div className="follower-buttons">
          <button className="link-button" onClick={handleShowFollowers}>
            {user.followers.length} Followers
          </button>
          <button className="link-button" onClick={handleShowFollowing}>
            {user.following.length} Following
          </button>
        </div>
        <nav className="profile-nav">
          <button onClick={() => setActiveSection('profile')}>Profile</button>
          <button onClick={() => setActiveSection('orders')}>My Orders</button>
          <button onClick={() => setActiveSection('events')}>My Events</button>
        </nav>
      </div>
      <div className="profile-content">
        {activeSection === 'profile' && <ProfileSection user={user} setUser={setUser} />}
        {activeSection === 'orders' && <OrdersSection orders={user.orders || { current: [], previous: [] }} />}
        {activeSection === 'events' && <EventSection events={user.events || { upcoming: [], past: [] }} />}
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

export default ProfileRefresh;
