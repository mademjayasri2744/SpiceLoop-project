import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Home.css';
import Navbar from './Navbar';

const recipes = [
  {  
    id: '1',
    title: 'Spicy Grilled Chicken',
    image: 'https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741761.jpg?semt=ais_hybrid&w=740',
    description: 'Juicy, smoky, and fiery hot — a bold non-veg classic.'
  },
  {
    id: '2',
    title: 'Paneer Tikka',
    image: 'https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Restaurant-Style-Paneer-Tikka-recipe.jpg',
    description: 'Smoky paneer cubes grilled with aromatic spices.'
  },
  {
    id: '3',
    title: 'Chicken Biryani',
    image: 'https://static.wixstatic.com/media/c47167_e9015843069a4c85af21284ec0adcb1e~mv2.webp/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c47167_e9015843069a4c85af21284ec0adcb1e~mv2.webp',
    description: 'Fragrant rice layered with spicy chicken masala.'
  },
  {
    id: '4',
    title: 'Masala Dosa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s',
    description: 'Crispy dosa with spiced potato filling — South Indian delight.'
  },
  {
    id: '5',
    title: 'French Fries',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/09/Masala-French-Fries-676x1024.jpg',
    description: 'Crispy golden fries seasoned to perfection.'
  },
];

function Home() {
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    alert('Logged out successfully!');
    navigate('/');
  };

  const carouselImages = [
    'https://i.ytimg.com/vi/ZqkcrV326WY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAip-TOl9jJKv0sUy71i5wku8GFqQ',
    'https://i.ytimg.com/vi/lObNPjqOfgw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZtYq5YVpVT_v9LdW7N-50RBy-ZQ',
    'https://i.ytimg.com/vi/_Am5bqHCK7A/maxresdefault.jpg',
    'https://i.ytimg.com/vi/FEN75ZfBdjA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmK7xXvbBp9yTC5agPnh9-9MEhyg'
  ];

  const youtubeLinks = [
    'https://www.youtube.com/watch?v=ZqkcrV326WY',
    'https://www.youtube.com/watch?v=lObNPjqOfgw',
    'https://www.youtube.com/watch?v=_Am5bqHCK7A',
    'https://www.youtube.com/watch?v=FEN75ZfBdjA'
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="home-container">
      <Navbar />

      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{ color: '#e84a27' }}>
              <span style={{ fontSize: '1.5em', marginRight: '10px' }}>🍜</span>
              Welcome to <span style={{ color: '#c03d1f' }}>SpiceLoop</span>
            </h1>
            <p style={{ color: '#c03d1f', fontWeight: '500' }}>
              Where flavors connect, and recipes inspire
            </p>
          </div>
          <div className="carousel">
            <a
              href={youtubeLinks[currentIndex]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={carouselImages[currentIndex]}
                alt="carousel"
                style={{ maxWidth: '360px', width: '100%' }}
              />
            </a>
          </div>
        </div>
      </header>

      <section className="recipes-section">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {isLoggedIn ? (
              <Link to={`/recipe/${recipe.id}`}>
                <button>View Recipe</button>
              </Link>
            ) : (
              <Link to="/signin">
                <button>Sign In to View</button>
              </Link>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
