import React, { useState } from 'react';
import './Cart.css'; // Import CSS for styling

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [productAdded, setProductAdded] = useState('');

    const addToCart = (product) => {
        // Add product to cart
        setCartItems([...cartItems, product]);
        // Show added product message
        setProductAdded(`Added ${product.name} to cart - Price: $${product.price}`);
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Your Faiths Cart</h1>
                {cartItems.length === 0 && (
                    <div className="empty-cart">
                        <p>Your faiths Cart is empty.</p>
                        <a href="#">Shop today's deals</a>
                        <p>Sign in to your account</p>
                        <a href="#">Sign up now</a>
                    </div>
                )}
            </div>
            <div className="cart-content">
                {productAdded && <p className="product-added">{productAdded}</p>}
                <button onClick={() => addToCart({ name: 'Product A', price: 19.99 })}>Add Product A</button>
                <button onClick={() => addToCart({ name: 'Product B', price: 29.99 })}>Add Product B</button>
                {/* Add more buttons for adding different products */}
            </div>
        </div>
    );
}

export default Cart;
