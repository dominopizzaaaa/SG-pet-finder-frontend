import React from 'react';
import './styles/event-section.css';

const EventSection = ({ events }) => (
  <div className="event-section">
    <h2 className="event-title">My Events</h2>
    <div className="event-list">
      <h3 className="event-subtitle">Upcoming Events</h3>
      {events.upcoming.length === 0 ? <p>No upcoming events</p> : (
        <ul>
          {events.upcoming.map((event, index) => (
            <li key={index} className="event-item">{event}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="event-list">
      <h3 className="event-subtitle">Past Events</h3>
      {events.past.length === 0 ? <p>No past events</p> : (
        <ul>
          {events.past.map((event, index) => (
            <li key={index} className="event-item">{event}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default EventSection;
