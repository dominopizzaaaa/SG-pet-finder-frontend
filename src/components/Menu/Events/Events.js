import React from 'react';
import './styles/event-detail.css';
import pic from '../../../images/puppy1.jpg'; // Import the image

const Events = () => {
  const events = [
    {
      id: 1,
      name: 'MMA for Dogs',
      date: 'Wed, 29 May',
      location: '38 Begonia Drive',
      image: pic,
      description: 'Watch Bailey and Whiskey fight it out until one of them dies!',
      time: '29 May 2024, 6:00 pm – 30 May 2024, 9:00 pm',
      guests: ['Guest 1', 'Guest 2', 'Guest 3'],
      map: 'path/to/map-image.jpg',
    },
    {
      id: 2,
      name: 'Pet Adoption Fair',
      date: 'Sat, 12 Jun',
      location: 'Central Park, New York, NY 10024',
      image: 'path/to/adoption-fair.jpg',
      description: 'Find your new best friend!',
      time: '12 Jun 2024, 10:00 am – 12 Jun 2024, 4:00 pm',
      guests: ['Guest 1', 'Guest 2'],
      map: 'path/to/map-image.jpg',
    },
    // Add more events as needed
  ];

  return (
    <div className="events-page">
      <h1 className="events-title">Upcoming Events</h1>
      {events.map(event => (
        <div className="event-detail-page" key={event.id}>
          <div className="event-header">
            <h1>{event.name}</h1>
            <p>{event.date} | {event.location}</p>
          </div>
          <div className="event-info">
            <h2>Date</h2>
            <p>{event.date}</p>
            <h2>Time and Duration</h2>
            <p>{event.time}</p>
            <h2>About the Event</h2>
            <p>{event.description}</p>
          </div>
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <button className="rsvp-button">RSVP</button>
        </div>
      ))}
    </div>
  );
};

export default Events;
