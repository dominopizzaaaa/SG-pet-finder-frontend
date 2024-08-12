import React from 'react';
import './styles/about.css';
import dogAndCatImage from '../../../images/dog_and_cat2.png';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="welcome-section">
          <h1>
            Welcome to <span className="highlight">SGPetFinder</span>, your trusted
            destination for finding the perfect furry companion!
          </h1>
        </div>
        <div className="story-section">
          <h2>Our Story</h2>
          <p>
            Our story began with a shared love for animals and a deep-rooted
            commitment to their well-being. Inspired by the joy and fulfillment
            that pets bring into our lives, we set out on a mission to create a
            platform that would make the adoption process more accessible and
            transparent.
          </p>
          <p>
            With a dedicated team of pet enthusiasts, breeders, and animal
            welfare advocates, we've worked tirelessly to build a community-driven
            space where pets and their prospective owners can connect, bond, and
            create lasting memories together.
          </p>
          <p>
            From humble beginnings to becoming a trusted resource for pet adoption,
            our journey is fueled by a passion for making a positive difference in
            the lives of animals and their human companions.
          </p>
          <p>
            So whether you're a first-time pet owner or a seasoned enthusiast, we
            invite you to join us on our journey and experience the magic of pet
            adoption with SGPetFinder.
          </p>
        </div>
      </section>
      <img className="about-image" src={dogAndCatImage} alt="Dog and Cat" />
    </div>
  );
};

export default About;
