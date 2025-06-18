import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🍜<span>SpiceLoop</span></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/view">View Recipes</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">Log Out</button>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
