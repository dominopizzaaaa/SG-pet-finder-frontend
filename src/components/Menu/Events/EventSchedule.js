import React from 'react';
import './styles/event-schedule.css';

const EventSchedule = () => {
  const schedule = [
    { date: 'Wed, 29 May', time: '6:30 pm – 7:00 pm', item: 'Schedule Item 1', tags: ['Tag1'] },
    { date: 'Wed, 29 May', time: '7:00 pm – 7:35 pm', item: 'Schedule Item 2', tags: ['Tag2', 'Tag3'] },
    { date: 'Wed, 29 May', time: '7:45 pm – 8:15 pm', item: 'Schedule Item 3', tags: ['Tag1', 'Tag4'] },
    { date: 'Thu, 30 May', time: '6:30 pm – 7:00 pm', item: 'Schedule Item 4', tags: ['Tag1'] },
    { date: 'Thu, 30 May', time: '7:00 pm – 7:35 pm', item: 'Schedule Item 5', tags: ['Tag2'] },
    { date: 'Thu, 30 May', time: '7:45 pm – 8:15 pm', item: 'Schedule Item 6', tags: ['Tag1', 'Tag3'] },
  ];

  return (
    <div className="event-schedule-page">
      <div className="schedule-header">
        <h1>Schedule</h1>
        <button className="get-tickets-button">Get Tickets</button>
      </div>
      <div className="schedule-content">
        {schedule.map((session, index) => (
          <div className="schedule-item" key={index}>
            <h3>{session.date}</h3>
            <p>{session.time}</p>
            <p>{session.item}</p>
            <div className="tags">
              {session.tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
