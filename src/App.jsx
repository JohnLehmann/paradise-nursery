import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  const handleHomeClick = () => {
    setShowProducts(false);
  };

  if (showProducts) {
    return <ProductList onHomeClick={handleHomeClick} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;