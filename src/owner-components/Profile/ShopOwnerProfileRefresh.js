import React, { useState } from 'react';
import ShopOwnerProfileSection from './ShopOwnerProfileSection';
import './styles/shop-owner-profile-refresh.css';

const ShopOwnerProfileRefresh = ({ user, setUser }) => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="shop-owner-profile-page">
      <div className="shop-owner-profile-sidebar">
        {user.backgroundPicture && (
          <img 
            src={user.backgroundPicture} 
            alt="Background" 
            className="background-img" 
          />
        )}
        <h2>{user.shopName}</h2>
      </div>
      <div className="shop-owner-profile-content">
        {activeSection === 'profile' && <ShopOwnerProfileSection user={user} setUser={setUser} />}
      </div>
    </div>
  );
};

export default ShopOwnerProfileRefresh;
