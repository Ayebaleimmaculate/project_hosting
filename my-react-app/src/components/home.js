import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    // Navigate to the OrderOnline page
    navigate('/order-online');
  };

  return (
    <div className="container">
      <div className="text-content">
        <h1>Faith's Confectionery</h1>
        <p className="slogan">Delight every bite</p>
        <button className="btn btn-primary" onClick={handleShopNowClick}>Shop Now</button>
      </div>
      {/* Uncomment below if you have an image container */}
      {/* <div className="image-container">
        <img src={backgroundImg} alt="Background" />
      </div> */}
    </div>
  );
};

export default Home;
