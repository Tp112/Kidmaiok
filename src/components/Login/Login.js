import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();
  const userData = [
    { id: 552486486, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 1, username: '1', password: '', role: 'user' },
    { id: 2, username: '2', password: '', role: 'user' },
    // Add more users here...
  ];
  const handleLogin = () => {
    const user = userData.find((u) => u.username === username && u.password === password);
    if (user) {
      navigate(`/home/${user.id}`);
    } else {
      alert('Invalid. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <div></div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div></div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;