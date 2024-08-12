import React from 'react';
import './styles/forum.css';

const Forum = () => {
  return (
    <div className="forum-page">
      <header className="forum-header">
        <h1>Join Our Pet Forum</h1>
        <p>Click the button below to join our Facebook group and engage with other pet lovers. Share your questions, stories, and experiences!</p>
        <a href="https://fb.me/g/p_MrSD7mjhHeJtxBAW/ngAlp4aW" target="_blank" rel="noopener noreferrer" className="join-group-button">
          Join Group
        </a>
      </header>
    </div>
  );
};

export default Forum;
