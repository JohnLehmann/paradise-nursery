import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://placehold.co/200x200?text=Snake+Plant', cost: '$15' },
      { name: 'Spider Plant', image: 'https://placehold.co/200x200?text=Spider+Plant', cost: '$12' },
      { name: 'Peace Lily', image: 'https://placehold.co/200x200?text=Peace+Lily', cost: '$18' },
      { name: 'Boston Fern', image: 'https://placehold.co/200x200?text=Boston+Fern', cost: '$14' },
      { name: 'Rubber Plant', image: 'https://placehold.co/200x200?text=Rubber+Plant', cost: '$20' },
      { name: 'Aloe Vera', image: 'https://placehold.co/200x200?text=Aloe+Vera', cost: '$10' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://placehold.co/200x200?text=Lavender', cost: '$16' },
      { name: 'Jasmine', image: 'https://placehold.co/200x200?text=Jasmine', cost: '$19' },
      { name: 'Rosemary', image: 'https://placehold.co/200x200?text=Rosemary', cost: '$11' },
      { name: 'Lemon Balm', image: 'https://placehold.co/200x200?text=Lemon+Balm', cost: '$9' },
      { name: 'Mint', image: 'https://placehold.co/200x200?text=Mint', cost: '$8' },
      { name: 'Basil', image: 'https://placehold.co/200x200?text=Basil', cost: '$7' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', image: 'https://placehold.co/200x200?text=ZZ+Plant', cost: '$22' },
      { name: 'Pothos', image: 'https://placehold.co/200x200?text=Pothos', cost: '$13' },
      { name: 'Cactus', image: 'https://placehold.co/200x200?text=Cactus', cost: '$10' },
      { name: 'Succulent Mix', image: 'https://placehold.co/200x200?text=Succulent', cost: '$12' },
      { name: 'Dracaena', image: 'https://placehold.co/200x200?text=Dracaena', cost: '$17' },
      { name: 'Philodendron', image: 'https://placehold.co/200x200?text=Philodendron', cost: '$15' },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

const handleAddToCart = (plant) => {
  dispatch(addItem(plant));
};

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handlePlantsClick = () => {
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  if (showCart) {
    return (
      <CartItem onContinueShopping={handleContinueShopping} />
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
          Paradise Nursery
        </div>
        <div className="nav-links">
          <span onClick={onHomeClick} style={{ cursor: 'pointer' }}>Home</span>
          <span onClick={handlePlantsClick} style={{ cursor: 'pointer' }}>Plants</span>
          <span onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            Cart 🛒 ({totalItems})
          </span>
        </div>
      </nav>

      <div className="product-list-container">
        {plantsArray.map((category) => (
          <div key={category.category} className="category-section">
            <h2>{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                <button
  disabled={cartItems.some(item => item.name === plant.name)}
  onClick={() => handleAddToCart(plant)}
>
  {cartItems.some(item => item.name === plant.name) ? 'Added' : 'Add to Cart'}
</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;