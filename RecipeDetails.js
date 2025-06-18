import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/RecipeDetails.css';

const allRecipes = [
  {
    id: '1',
    title: 'Spicy Grilled Chicken',
    image: 'https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741761.jpg?semt=ais_hybrid&w=740',
    ingredients: ['Chicken thighs', 'Yogurt', 'Red chili powder', 'Ginger garlic paste', 'Lemon juice', 'Salt'],
    steps: [
      'Clean and wash the chicken thighs thoroughly. Pat them dry with a paper towel.',
      'Prepare a marinade using yogurt, ginger-garlic paste, red chili powder, lemon juice, and salt.',
      'Rub the marinade all over the chicken. Cover and refrigerate for at least 2 hours (overnight for best results).',
      'Preheat the grill or pan to medium-high heat. Lightly oil the surface to avoid sticking.',
      'Grill the marinated chicken for 6–8 minutes on each side until fully cooked and slightly charred.',
      'Serve hot with lemon wedges and onion rings.'
    ]
  },
  {
    id: '2',
    title: 'Paneer Tikka',
    image: 'https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Restaurant-Style-Paneer-Tikka-recipe.jpg',
    ingredients: ['Paneer cubes', 'Yogurt', 'Red chili powder', 'Garam masala', 'Lemon juice', 'Capsicum', 'Onion', 'Salt'],
    steps: [
      'In a bowl, mix yogurt with red chili powder, garam masala, salt, and lemon juice.',
      'Add paneer cubes, chopped onion, and capsicum into the marinade and coat well.',
      'Let it rest for 30 minutes.',
      'Thread the marinated paneer and veggies onto skewers.',
      'Grill or bake at 200°C for 15–20 minutes or until golden charred spots appear.',
      'Serve with mint chutney and lemon wedges.'
    ]
  },
  {
    id: '3',
    title: 'Chicken Biryani',
    image: 'https://static.wixstatic.com/media/c47167_e9015843069a4c85af21284ec0adcb1e~mv2.webp/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c47167_e9015843069a4c85af21284ec0adcb1e~mv2.webp',
    ingredients: ['Chicken', 'Basmati rice', 'Onions', 'Yogurt', 'Biryani masala', 'Mint leaves', 'Coriander', 'Spices'],
    steps: [
      'Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 1 hour.',
      'Cook basmati rice till 70% done and drain.',
      'In a large pot, layer marinated chicken, fried onions, mint, coriander, and half-cooked rice.',
      'Repeat layers and finish with saffron milk.',
      'Seal the pot with a lid or dough and cook on dum for 30–40 mins.',
      'Serve hot with raita.'
    ]
  },
  {
    id: '4',
    title: 'Masala Dosa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s',
    ingredients: ['Dosa batter', 'Potatoes', 'Onion', 'Mustard seeds', 'Green chilies', 'Curry leaves', 'Turmeric'],
    steps: [
      'Heat oil in a pan, add mustard seeds, curry leaves, and green chilies.',
      'Add sliced onions and sauté till golden. Add turmeric and boiled mashed potatoes.',
      'Mix well and cook for 2 minutes. Masala is ready.',
      'Spread dosa batter on a hot tawa, drizzle oil around edges.',
      'Place a spoon of potato masala in the center and fold the dosa.',
      'Serve hot with chutney and sambar.'
    ]
  },
  {
    id: '5',
    title: 'French Fries',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/09/Masala-French-Fries-676x1024.jpg',
    ingredients: ['Potatoes', 'Salt', 'Oil for frying'],
    steps: [
      'Peel the potatoes and cut them into long thin strips.',
      'Soak in cold water for 30 mins, then drain and pat dry.',
      'Heat oil in a deep pan and fry the fries until light golden.',
      'Remove and rest for a few mins, then fry again for extra crispiness.',
      'Sprinkle salt and serve hot with ketchup or mayo.'
    ]
  }
];


function RecipeDetails() {
  const { id } = useParams();
  const recipe = allRecipes.find((r) => r.id === id);

  if (!recipe) return <h2 style={{ textAlign: 'center' }}>Recipe not found</h2>;

  return (
    <div className="recipe-details-container">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />

      <div className="section">
        <h3>🧂 Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>👨‍🍳 Steps</h3>
        <ol>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetails;
