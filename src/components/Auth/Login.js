import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/auth.css'; // Import your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      console.log('Token:', response.data.token); // Print the token to the console
      console.log('Response from server:', response.data);
      setMessage('Logged in successfully!');
      window.location.href = "/profile"; // Redirect to profile page after login
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      setMessage(`Failed to log in: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="auth-image">
        <img src={require('../../images/buyers-front-pg.jpeg')} alt="Shop Owner" />
      </div>
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      {message && <p>{message}</p>}
      <p>
        Don't have an account yet? Click <Link to="/signup" className="highlight-link">here</Link> to Sign Up now!
      </p>
      <p>
        Shop Owner? Click <Link to="/shop-owners-login" className="highlight-link">here</Link>
      </p>
    </div>
  );
};

export default Login;