import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const ShopInStore = () => {
    return (
        <div>
            <h2>SHOP IN STORE</h2>
            <p>Thank you for choosing us!</p>
            <Link to="/order-online/products">
        <button>Find Our Store</button>
      </Link>
            <Link to="/products">
                <button>FIND OUR STORE</button>
            </Link>
        </div>
    );
};

export default ShopInStore;
