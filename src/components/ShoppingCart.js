import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, deletePlant } from '../redux/plantSlice';
import './styles.css';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.plants.cart);
  const totalItems = useSelector((state) => state.plants.totalItems);
  const totalPrice = useSelector((state) => state.plants.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cart.map((plant) => (
        <div key={plant.id} className="cart-item">
          <img src={`/images/${plant.name}.jpg`} alt={plant.name} className="thumbnail" />
          <div>
            <h4>{plant.name}</h4>
            <p>Price: ${plant.price}</p>
            <p>Quantity: {plant.inCart}</p>
            <button onClick={() => dispatch(incrementQuantity(plant.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(plant.id))}>-</button>
            <button onClick={() => dispatch(deletePlant(plant.id))}>Delete</button>
          </div>
        </div>
      ))}
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button>
        <Link to="/products">Continue Shopping</Link>
      </button>
    </div>
  );
};

export default ShoppingCart;
