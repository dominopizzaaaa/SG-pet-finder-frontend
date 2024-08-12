import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles/ShopOwnerLogin.css';

const ShopOwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login form with:', { email, password });
    try {
      const response = await axios.post('http://localhost:5000/api/shop-owners-login', { email, password });
      console.log('Response from server:', response);
      localStorage.setItem('token', response.data.token); // Save the token for authenticated requests
      setMessage(response.data.message);
      navigate('/shop-owners-home'); // Redirect to shop owner home after successful login
    } catch (error) {
      console.error('Error during login:', error);
      setMessage(error.response?.data?.message || 'Error during login');
    }
  };

  return (
    <div className="login-container">
      <h2>Shop Owner Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          required 
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Don't have an account yet? Click <Link to="/shop-owners-signup" className="highlight-link">here</Link> to Sign Up now!
      </p>
      <p>
        Not a shop owner? Click <Link to="/login" className="highlight-link">here</Link>
      </p>
    </div>
  );
};

export default ShopOwnerLogin;
