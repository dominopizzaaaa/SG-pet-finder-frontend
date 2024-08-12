import React from 'react';
import './styles/footer.css';
import logo from '../../images/icon.png'; // Import the logo image
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx5lbnvMkuzT7b8AL1T4Bj7BRbGqqdr1taCyqgEM6joCm4FBE2cqfD1QR-l2PQsvjO5kg/exec';
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert('Message sent successfully');
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  const handleListOfPartners = () => {
    navigate('/lists-of-partners');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {!isLoggedIn && (
          <section className="newsletter">
            <h2>Join our Pet Club</h2>
            <p>Create an account with us to gain access to more pet information!</p>
            <div className="auth-buttons">
              <button onClick={handleLogin} className="auth-button">Login</button>
              <button onClick={handleSignup} className="auth-button">Sign Up</button>
            </div>
          </section>
        )}

        <div className="social-media-feedback-container">
          <section className="social-media">
            <h3>Tag us on your social media platforms!</h3>
            <div className="social-media-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
            <h3>List of Partnered Pet Shops</h3>
            <button className="find-out-more" onClick={handleListOfPartners}>Find Out More {'>'}</button>
          </section>
          
          <section className="feedback">
            <h3>Submit Enquiries or Feedback</h3>
            <p>Clear any of your doubts & help us to improve!</p>
            <form className="feedback-form" name="submit-to-google-sheet" onSubmit={handleSubmitFeedback}>
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit" className="send-button">Send</button>
            </form>
          </section>
        </div>
      </div>
      <section className="bottom">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" className="company-logo" />
          </NavLink>
        </div>

        <div className="contact">
          <h1>Contact : sgpetfinderr@gmail.com</h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
