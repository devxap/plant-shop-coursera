import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Green Oasis</h1>
      <p>We provide the best houseplants to bring life to your home.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
