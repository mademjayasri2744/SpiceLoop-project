import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const match = users.find((u) => u.email === email && u.password === password);

    if (match) {
      localStorage.setItem('userLoggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
