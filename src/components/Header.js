import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

const Header = () => {
  const totalItems = useSelector((state) => state.plants.totalItems);

  return (
    <header className="header">
      <Link to="/products">Products</Link>
      <Link to="/cart">
        Cart ({totalItems})
      </Link>
    </header>
  );
};

export default Header;
