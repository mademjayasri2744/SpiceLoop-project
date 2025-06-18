import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import ViewRecipe from './ViewRecipe';
import RecipeDetails from './RecipeDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './styles/App.css';

function App() {
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-recipe"
          element={isLoggedIn ? <AddRecipe /> : <Navigate to="/signin" />}
        />
        <Route
          path="/view"
          element={isLoggedIn ? <ViewRecipe /> : <Navigate to="/signin" />}
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
