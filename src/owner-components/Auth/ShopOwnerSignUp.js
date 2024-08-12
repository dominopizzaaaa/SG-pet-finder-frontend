import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles/ShopOwnerSignUp.css';

const ShopOwnerSignUp = () => {
  const [email, setEmail] = useState('');
  const [shopName, setShopName] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with:', { email, shopName, password, verificationCode });

    if (verificationCode !== '1234567890') {
      setMessage('You are not authorised to sign up as a shop owner');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/shop-owners-signup', { email, shopName, password });
      console.log('Response from server:', response);
      setMessage(response.data.message);
      navigate('/shop-owners-login'); // Redirect to login page after successful sign-up
    } catch (error) {
      console.error('Error during sign-up:', error);
      setMessage(error.response?.data?.message || 'Error during sign-up');
    }
  };

  return (
    <div className="signup-container">
      <h2>Shop Owner Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          required 
        />
        <input 
          type="text" 
          value={shopName} 
          onChange={(e) => setShopName(e.target.value)} 
          placeholder="Shop Name"
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          required 
        />
        <input 
          type="text" 
          value={verificationCode} 
          onChange={(e) => setVerificationCode(e.target.value)} 
          placeholder="Verification Code"
          required 
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        <i>For testing, the verification code is 1234567890</i>
      </p>
      <p>
        Already have an account? Login <Link to="/shop-owners-login" className="highlight-link">here</Link>
      </p>
      <p>
        Not a shop owner? Click <Link to="/signup" className="highlight-link">here</Link>
      </p>
    </div>
  );
};

export default ShopOwnerSignUp;
