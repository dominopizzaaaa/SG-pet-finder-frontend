import React, { useState } from 'react';
import './styles/pet-supplies.css';
import supply1 from '../../../images/supply1.jpeg';
import supply2 from '../../../images/supply2.jpeg';

const PetSupplies = () => {
  const [quantities, setQuantities] = useState({ supply1: 1, supply2: 1 });

  const handleQuantityChange = (supply, value) => {
    setQuantities({ ...quantities, [supply]: value });
  };

  return (
    <div className="pet-supplies-page">
      <h2>Pet Supplies</h2>
      <div className="supply-cards">
        <div className="supply-card">
          <img src={supply1} alt="Supply 1" className="supply-img" />
          <div className="supply-info">
            <h3>Supply 1</h3>
            <p>Description of Supply 1</p>
            <div className="quantity-selector">
              <label htmlFor="supply1-quantity">Quantity:</label>
              <input
                type="number"
                id="supply1-quantity"
                value={quantities.supply1}
                onChange={(e) => handleQuantityChange('supply1', e.target.value)}
                min="1"
              />
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="supply-card">
          <img src={supply2} alt="Supply 2" className="supply-img" />
          <div className="supply-info">
            <h3>Supply 2</h3>
            <p>Description of Supply 2</p>
            <div className="quantity-selector">
              <label htmlFor="supply2-quantity">Quantity:</label>
              <input
                type="number"
                id="supply2-quantity"
                value={quantities.supply2}
                onChange={(e) => handleQuantityChange('supply2', e.target.value)}
                min="1"
              />
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSupplies;
