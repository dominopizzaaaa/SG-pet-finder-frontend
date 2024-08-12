import React, { useState } from 'react';
import './styles/testimonials.css';

const testimonials = [
  {
    text: "As a first-time pet owner, I was overwhelmed with where to start. This website made the process so easy and enjoyable. The information provided about each puppy helped me make an informed decision, and now I have a loyal companion by my side. Highly recommend!",
    author: "Isabel Lee",
    date: "28 July 2024"
  },
  {
    text: "I love dogs!!",
    author: "Dominic Koh",
    date: "28 July 2024"
  },
  {
    text: "I love Bailey!",
    author: "Kaitlyn Lee",
    date: "28 July 2024"
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials-header">Testimonials</h2>
      <div className={`testimonial-item ${fade ? 'fade-in' : 'fade-out'}`}>
        <button className="testimonial-nav left" onClick={prevTestimonial}>&lt;</button>
        <div className="testimonial-content">
          <p>"{testimonials[currentIndex].text}"</p>
          <p className="testimonial-author-date">- {testimonials[currentIndex].author}, {testimonials[currentIndex].date}</p>
        </div>
        <button className="testimonial-nav right" onClick={nextTestimonial}>&gt;</button>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
