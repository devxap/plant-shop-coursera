import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/plantSlice';
import './styles.css';

const ProductList = () => {
  const plants = useSelector((state) => state.plants.plants);
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Our Houseplants</h2>
      {['Succulents', 'Indoor', 'Trees'].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="plant-category">
            {plants.filter(plant => plant.category === category).map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={`/images/${plant.name}.jpg`} alt={plant.name} className="thumbnail" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addToCart(plant.id))}
                  disabled={plant.inCart > 0}
                >
                  {plant.inCart > 0 ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
