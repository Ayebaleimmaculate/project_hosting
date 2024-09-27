import React from 'react';
import bakeryImage from './bakery.PNG'; // Replace with your actual image path

const AboutUs = () => (
  <div className="about-container">
    <div className="content">
      <h1>About Us</h1>
      <p>Welcome to Faiths Confectionery Bakery! We are a family-owned bakery dedicated to bringing you the finest baked goods made from the highest quality ingredients. Our passion for baking shines through in every item we create, from our freshly baked bread to our delectable pastries and cakes.</p>

      <h2>Our Services</h2>
      <ul>
        <li>Freshly baked bread and rolls</li>
        <li>Wide variety of pastries and desserts</li>
        <li>Custom cakes for all occasions</li>
        <li>Catering services for events</li>
        <li>Specialty coffee and tea</li>
      </ul>

      <h2>Hours of Operation</h2>
      <p>We are open 7 days a week to satisfy your cravings:</p>
      <ul>
        <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
        <li>Saturday: 8:00 AM - 6:00 PM</li>
        <li>Sunday: 8:00 AM - 4:00 PM</li>
      </ul>

      <h2>Our Story</h2>
      <p>Founded in 2010, Faith Confectionery Bakery has been a beloved part of the Sweetville community. Our founder, Jane Doe, started this bakery with a dream to share her love of baking with the world. Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction has remained the same. We look forward to serving you and making your day a little sweeter!</p>
    </div>
    <div className="image">
      <img src={bakeryImage} alt="Bakery" />
    </div>
  </div>
);

export default AboutUs;
