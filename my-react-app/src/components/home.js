import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/order-online');
  };

  return (
    <div className="container">
      <div className="text-content">
        <h1>Faith's Confectionery</h1>
        <p className="slogan">Delight In Every Bite</p>
        <button className="btn btn-primary" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
