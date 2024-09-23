import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './pro.css';
// Import images for products
import weddingCakeImage from '../images/wed10.png';
import birthdayCakeImage from '../images/birth5.png';
import babyShowerCakeImage from '../images/baby2.png';
import graduationCakeImage from '../images/grad7.png';
import anniversaryCakeImage from '../images/ani6.png';
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
        { id: 1, name: "Wedding Cake", description: "Elegant wedding cake", price: "$200", image: weddingCakeImage },
        { id: 2, name: "Birthday Cake", description: "Fun birthday cake", price: "$50", image: birthdayCakeImage },
        { id: 3, name: "Baby Shower Cake", description: "Adorable baby shower cake", price: "$60", image: babyShowerCakeImage },
        { id: 4, name: "Graduation Cake", description: "Celebratory graduation cake", price: "$45", image: graduationCakeImage },
        { id: 5, name: "Anniversary Cake", description: "Romantic anniversary cake", price: "$70", image: anniversaryCakeImage },
      ]
    },
    {
      id: 2,
      category: "Muffins",
      items: [
        { id: 6, name: "Blueberry Muffin", description: "Classic blueberry muffin", price: "$3", image: blueberryMuffinImage },
        { id: 7, name: "Chocolate Chip Muffin", description: "Decadent chocolate chip muffin", price: "$3.5", image: chocolateChipMuffinImage },
        { id: 8, name: "Banana Nut Muffin", description: "Nutty banana muffin", price: "$3.2", image: bananaNutMuffinImage },
        { id: 9, name: "Lemon Poppy Seed Muffin", description: "Zesty lemon muffin", price: "$3.2", image: lemonPoppySeedMuffinImage },
        { id: 10, name: "Pumpkin Spice Muffin", description: "Seasonal pumpkin spice muffin", price: "$3.5", image: pumpkinSpiceMuffinImage },
      ]
    },
    {
      id: 3,
      category: "Doughnuts",
      items: [
        { id: 11, name: "Glazed Doughnut", description: "Classic glazed doughnut", price: "$2", image: glazedDoughnutImage },
        { id: 12, name: "Chocolate Frosted Doughnut", description: "Rich chocolate frosted doughnut", price: "$2.5", image: chocolateFrostedDoughnutImage },
        { id: 13, name: "Jelly Filled Doughnut", description: "Sweet jelly filled doughnut", price: "$2.2", image: jellyFilledDoughnutImage },
        { id: 14, name: "Cinnamon Sugar Doughnut", description: "Crispy cinnamon sugar doughnut", price: "$2.2", image: cinnamonSugarDoughnutImage },
        { id: 15, name: "Maple Bacon Doughnut", description: "Savory-sweet maple bacon doughnut", price: "$3", image: mapleBaconDoughnutImage }
      ]
    }
  ];

  // State to manage expanded view
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Function to toggle expanded view for a specific category
  const toggleExpanded = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  // Function to render more products for a category
  const renderMoreProducts = (categoryId) => {
    const category = initialProducts.find(cat => cat.id === categoryId);
    const moreProducts = category.items.slice(5, 10); // Displaying 5 additional products, change slice as needed

    return (
      <div>
        {moreProducts.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h4 className="product-name">{item.name}</h4>
            <p className="product-description">{item.description}</p>
            <p className="product-price">{item.price}</p>
            <Link to="/order" className="btn btn-primary">Order</Link> {/* Link to order page */}
          </div>
        ))}
      </div>
    );
  };

  // Function to render products for a category
  const renderProducts = (categoryId) => {
    const category = initialProducts.find(cat => cat.id === categoryId);
    const itemsToDisplay = expandedCategories.includes(categoryId) ? category.items : category.items.slice(0, 5);

    return (
      <div className="products-list">
        {itemsToDisplay.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h4 className="product-name">{item.name}</h4>
            <p className="product-description">{item.description}</p>
            <p className="product-price">{item.price}</p>
            <Link to="/order" className="btn btn-primary">Order</Link> {/* Link to order page */}
          </div>
        ))}
        {category.items.length > 5 && !expandedCategories.includes(categoryId) && (
          <div className="more-products-link">
            <button className="btn btn-secondary" onClick={() => toggleExpanded(categoryId)}>More Products</button>
          </div>
        )}
        {expandedCategories.includes(categoryId) && renderMoreProducts(categoryId)}
      </div>
    );
  };

  return (
    <div className="products-container">
      <h1 className="section-title">OUR PRODUCTS</h1>
      {initialProducts.map(category => (
        <div key={category.id} className="product-category">
          <h3 className="category-title">{category.category}</h3>
          {renderProducts(category.id)}
        </div>
      ))}
      {/* Repeat product items as necessary */}
      <section className="sidebar">
        <div className="sidebar-content">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
            {/* Add more categories as needed */}
          </ul>
        </div>
      </section>
      {/* Repeat product items as necessary */}
      <Link to="/contacts">
        <button className="btn btn-secondary">FIND LOCATION</button>
      </Link>
    </div>
  );
}

export default Products;
