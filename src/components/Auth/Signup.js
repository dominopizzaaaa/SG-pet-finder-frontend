import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles/auth.css'; // Import your CSS file for styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { email, username, password });
      console.log('Response from server:', response.data);
      setMessage('Signed up successfully!');
      setTimeout(() => {
        navigate('/login');
      }, 1000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error during sign-up:', error.response?.data || error.message);
      setMessage(`Failed to sign up: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
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
        Already have an account? Click <Link to="/login" className="highlight-link">here</Link> to Log In!
      </p>
      <p>
        Shop Owner? Click <Link to="/shop-owners-login" className="highlight-link">here</Link>
      </p>
    </div>
  );
};

export default Signup;
