import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.some((u) => u.email === email);
    if (exists) {
      alert('User already exists. Try signing in.');
    } else {
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('userLoggedIn', 'true');
      alert('Account created successfully!');
      navigate('/');
    }
  };

  return (
    <div className="auth-page">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
