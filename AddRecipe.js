import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AddRecipe.css';

import Navbar from './Navbar';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [category, setCategory] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recipe "${title}" added successfully!`);
    // Optional: Save to localStorage or send to backend here
    navigate('/view');
  };

  return (
    <>
      <Navbar />
      <div className="add-recipe-container">
        <h2>📝 Share Your Flavor</h2>
        <form className="recipe-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Recipe Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
          <textarea
            placeholder="Steps (each step on new line)"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
          </select>
          <input type="file" accept="image/*" onChange={handleImage} />
          {imagePreview && <img src={imagePreview} alt="preview" className="preview-img" />}
          <button type="submit">Post Recipe</button>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
