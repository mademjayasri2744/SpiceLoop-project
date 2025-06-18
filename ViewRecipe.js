import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ViewRecipe.css';
import Navbar from './Navbar'; // ✅ Added navbar

const recipeCategories = {
  "Veg": [
    { id: '101', title: 'Palak Paneer', image: '/images/palak-paneer.jpg' },
    { id: '102', title: 'Veg Pulao', image: '/images/veg-pulao.jpg' },
    { id: '103', title: 'Aloo Gobi', image: '/images/aloo-gobi.jpg' },
    { id: '104', title: 'Chana Masala', image: '/images/chana-masala.jpg' },
    { id: '105', title: 'Sambar', image: '/images/sambar.jpg' }
  ],
  "Non-Veg": [
    { id: '106', title: 'Mutton Curry', image: '/images/mutton-curry.jpg' },
    { id: '107', title: 'Fish Fry', image: '/images/fish-fry.jpg' },
    { id: '108', title: 'Crab Biryani', image: '/images/crab-biryani.jpg' },
    { id: '109', title: 'Egg Curry', image: '/images/egg-curry.jpg' },
    { id: '110', title: 'Prawn Masala', image: '/images/prawn-masala.jpg' }
  ],
  "Snacks": [
    { id: '111', title: 'Samosa', image: '/images/samosa.jpg' },
    { id: '112', title: 'Spring Rolls', image: '/images/spring-rolls.jpg' },
    { id: '113', title: 'Chicken Noodles', image: '/images/chicken-noodles.jpg' },
    { id: '114', title: 'Cutlet', image: '/images/cutlet.jpg' },
    { id: '115', title: 'Pakora', image: '/images/pakora.jpg' }
  ],
  "Desserts": [
    { id: '116', title: 'Kheer', image: '/images/kheer.jpg' },
    { id: '117', title: 'Ice Cream', image: '/images/ice-cream.jpg' },
    { id: '118', title: 'Rasgulla', image: '/images/rasgulla.jpg' },
    { id: '119', title: 'Gulab Jamun', image: '/images/gulab-jamun.jpg' },
    { id: '120', title: 'Halwa', image: '/images/halwa.jpg' }
  ]
};

function ViewRecipe() {
  return (
    <div className="view-container">
      <Navbar /> {/* ✅ Navbar added */}

      <h2>🍴 Explore by Category</h2>
      {Object.keys(recipeCategories).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="recipe-grid">
            {recipeCategories[category].map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
                <Link to={`/recipe/${recipe.id}`}>
                  <button>View</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewRecipe;
