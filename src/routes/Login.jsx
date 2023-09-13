import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Paintings from './Paintings';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useOutletContext(); // Initialize with a dummy user
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here

    // Assuming successful login, set the user and navigate to another route
    setUser({ id: 1, username: username ? username : 'Daniel Smith' });
    navigate('/');
  };

  console.log(username, password);

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">Login</h1>
        <fieldset className="login-fieldset">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="username-input"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
