import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './pro.css';

// Import images for products
import weddingCakeImage from '../images/wedin.png';
import birthdayCakeImage from '../images/birth5.png';
import babyShowerCakeImage from '../images/baby2.png';
import graduationCakeImage from '../images/grad7.png';
import anniversaryCakeImage from '../images/ani6.png';
import chocolateCakeImage from '../images/choco_cak.png';
import redVelvetCakeImage from '../images/wed3.png';
import carrotCakeImage from '../images/carot.png';
import lemonCakeImage from '../images/lemon.png';
import marbleCakeImage from '../images/marb.png';
import blueberryMuffinImage from '../images/muf4.png';
import chocolateChipMuffinImage from '../images/muff5.png';
import bananaNutMuffinImage from '../images/muf2.png';
import lemonPoppySeedMuffinImage from '../images/muff3.png';
import pumpkinSpiceMuffinImage from '../images/muff5.png';
import glazedDoughnutImage from '../images/dough1.png';
import chocolateFrostedDoughnutImage from '../images/dough2.png';
import jellyFilledDoughnutImage from '../images/dough3.png';
import cinnamonSugarDoughnutImage from '../images/dough4.png';
import mapleBaconDoughnutImage from '../images/dough5.png';

const Products = () => {
  // Dummy data for initial products
  const initialProducts = [
    {
      id: 1,
      category: "Cakes",
      items: [
        { id: 1, name: "Wedding Cake", description: "Elegant wedding cake", price: "1,500,000", image: weddingCakeImage },
        { id: 2, name: "Birthday Cake", description: "Fun birthday cake", price: "90,000", image: birthdayCakeImage },
        { id: 3, name: "Baby Shower Cake", description: "Adorable baby shower cake", price: "140,000", image: babyShowerCakeImage },
        { id: 4, name: "Graduation Cake", description: "Celebratory graduation cake", price: "120,000", image: graduationCakeImage },
        { id: 5, name: "Anniversary Cake", description: "Romantic anniversary cake", price: "100,000", image: anniversaryCakeImage },
        { id: 6, name: "Chocolate Cake", description: "Rich chocolate cake", price: "150,000", image: chocolateCakeImage },
        { id: 7, name: "Red Velvet Cake", description: "Decadent red velvet cake", price: "160,000", image: redVelvetCakeImage },
        { id: 8, name: "Carrot Cake", description: "Spicy carrot cake with cream cheese frosting", price: "140,000", image: carrotCakeImage },
        { id: 9, name: "Lemon Cake", description: "Tangy lemon cake", price: "130,000", image: lemonCakeImage },
        { id: 10, name: "Marble Cake", description: "Swirled marble cake", price: "150,000", image: marbleCakeImage },
      ]
    },
    {
      id: 2,
      category: "Muffins",
      items: [
        { id: 11, name: "Blueberry Muffin", description: "Classic blueberry muffin", price: "$3", image: blueberryMuffinImage },
        { id: 12, name: "Chocolate Chip Muffin", description: "Decadent chocolate chip muffin", price: "$3.5", image: chocolateChipMuffinImage },
        { id: 13, name: "Banana Nut Muffin", description: "Nutty banana muffin", price: "$3.2", image: bananaNutMuffinImage },
        { id: 14, name: "Lemon Poppy Seed Muffin", description: "Zesty lemon muffin", price: "$3.2", image: lemonPoppySeedMuffinImage },
        { id: 15, name: "Pumpkin Spice Muffin", description: "Seasonal pumpkin spice muffin", price: "$3.5", image: pumpkinSpiceMuffinImage },
      ]
    },
    {
      id: 3,
      category: "Doughnuts",
      items: [
        { id: 16, name: "Glazed Doughnut", description: "Classic glazed doughnut", price: "@2000", image: glazedDoughnutImage },
        { id: 17, name: "Chocolate Frosted Doughnut", description: "Rich chocolate frosted doughnut", price: "@3000", image: chocolateFrostedDoughnutImage },
        { id: 18, name: "Jelly Filled Doughnut", description: "Sweet jelly filled doughnut", price: "dozen 36,000", image: jellyFilledDoughnutImage },
        { id: 19, name: "Cinnamon Sugar Doughnut", description: "Crispy cinnamon sugar doughnut", price: "1/2 dozen 18,000", image: cinnamonSugarDoughnutImage },
        { id: 20, name: "Maple Bacon Doughnut", description: "Savory-sweet maple bacon doughnut", price: "1/4 dozen 9000", image: mapleBaconDoughnutImage }
      ]
    }
  ];

  // Function to render products for a category
  const renderProducts = (items) => {
    return (
      <div className="products-list">
        {items.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h4 className="product-name">{item.name}</h4>
            <p className="product-description">{item.description}</p>
            <p className="product-price">{item.price}</p>
            <Link to="/order-online" className="btn btn-primary">Order</Link> {/* Link to order page */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="products-container">
      <h1 className="section-title">OUR PRODUCTS</h1>
      {initialProducts.map(category => (
        <div key={category.id} className="product-category">
          <h3 className="category-title">{category.category}</h3>
          {renderProducts(category.items)}
        </div>
      ))}
      
    </div>
  );
};

export default Products;
