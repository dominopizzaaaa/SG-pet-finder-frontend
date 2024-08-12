// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';
import puppy1 from '../../../images/view_more_puppy.png';
import kitten1 from '../../../images/view_more_kitten.png';
import Testimonials from '../Testimonials/Testimonials';
import heroImage from '../../../images/dog_and_cat.png'; // Example hero image
import Services from './Services'; // Adjust the import path accordingly

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Finding Your Furry<br />Soulmate Made Simple!</h1>
          <div className="hero-image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </section>
      <section className="intro">
        <h2>You deserve a furry friend as unique as you are.<br />Find your perfect match today!</h2>
        <p>
          The website serves as a comprehensive platform connecting potential pet owners<br />with their ideal furry companions while facilitating ethical and responsible pet adoption.
        </p>
      </section>
      <div className="cta">
        <div className="cta-item">
          <img src={puppy1} alt="Puppy" />
          <Link to="/puppies" className="cta-button">Load More Puppies</Link>
        </div>
        <div className="cta-item">
          <img src={kitten1} alt="Kitten" />
          <Link to="/kittens" className="cta-button">Load More Kittens</Link>
        </div>
      </div>
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
