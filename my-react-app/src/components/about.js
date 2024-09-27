import React from 'react';
import bakeryImage from './bakery.PNG'; // Replace with your actual image path
import './about.css';
const AboutUs = () => (
  <div className="about-container">
    <div className="content">
      <h1>About Us</h1>
      <p>Welcome to Faiths Confectionery! We are  passion driven and dedicated to bringing you the finest baked goods made with the highest quality ingredients. Our passion for baking shines through in every product we create.</p>
      <h2>Our Services</h2>
      <ul>
        <li>Freshly baked cakes</li>
        <li>Wide variety of pastries such as cookies, muffins and doughnuts</li>
        <li>Custom cakes for all occasions</li>
        
      </ul>

      <h2>Hours of Operation</h2>
      <p>We are open 6 days a week to satisfy your cravings:</p>
      <ul>
        <li>Monday - Saturday: 6:00 AM - 6:00 PM</li>
        
      </ul>

      <h2>Our Story</h2>
      <p>Founded in 2021 December, Faith's Confectionery has been a beloved part of the Sweetville community. The founder, Katwesige Aisha, started this bakery with a dream to share her passion of baking with the world. Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction has remained the same. We look forward to serving you and making your occasions more memorable!</p>
    </div>
    <div className="image">
      <img src={bakeryImage} alt="Bakery" />
    </div>
  </div>
);

export default AboutUs;
