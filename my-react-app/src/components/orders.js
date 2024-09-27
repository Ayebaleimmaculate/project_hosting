import React, { useState } from 'react';
import './order.css';
import backgroundImage from '../images/orderrr.jpg'; // Adjust the path based on your project structure

const WHATSAPP_NUMBER = '+256773491110'; // Your WhatsApp number
const WHATSAPP_MESSAGE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

// Define price options
const priceOptions = [
  { label: '1/2 Kg - 70,000', value: '0.5:70000' },
  { label: '1 Kg - 50,000', value: '1:50000' },
  { label: '2 Kg - 80,000', value: '2:80000' },
  { label: '3 Kg - 100,000', value: '3:100000' },
  { label: '4 Kg - 140,000', value: '4:140000' },
  { label: '5 Kg - 200,000', value: '5:200000' },
];

const OrderNow = () => {
  const [formData, setFormData] = useState({
    product_id: '',
    quantity: '1', // Default quantity
    price: 50000, // Default price for 1 Kg
    special_instructions: ''
  });

  const [error, setError] = useState('');

  // Update form data and price based on selected option
  const handlePriceChange = (e) => {
    const [quantity, price] = e.target.value.split(':');

    setFormData({
      ...formData,
      quantity,
      price: parseInt(price, 10)
    });
  };

  // Update quantity in form data
  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    const priceOption = priceOptions.find(option => option.value.startsWith(quantity));
    const price = priceOption ? parseInt(priceOption.value.split(':')[1], 10) : formData.price;

    setFormData({
      ...formData,
      quantity,
      price
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { product_id, quantity, price, special_instructions } = formData;

    // Construct the WhatsApp message
    const message = `Order Details:%0AProduct: ${product_id}%0AQuantity: ${quantity} Kg%0APrice: ${price} UGX%0ASpecial Instructions: ${special_instructions}`;
    const whatsappUrl = `${WHATSAPP_MESSAGE_URL}${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Optionally reset form fields after submission
    setFormData({
      product_id: '',
      quantity: '1',
      price: 50000,
      special_instructions: ''
    });
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2 className='order'>Order Now</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Product:</label>
          <select
            name="product_id"
            value={formData.product_id}
            onChange={(e) => setFormData({ ...formData, product_id: e.target.value })}
            required
          >
            <option value="" disabled>Select a product</option>
            <option value="wedding_cake">Wedding Cake</option>
            <option value="birthday_cake">Birthday Cake</option>
            <option value="baby_shower_cake">Baby Shower Cake</option>
            <option value="graduation_cake">Graduation Cake</option>
            <option value="anniversary_cake">Anniversary Cake</option>
            {/* Removed muffin and doughnut options */}
          </select>
        </div>
        <div>
          <label>Price:</label>
          <select
            name="price"
            value={`${formData.quantity}:${formData.price}`}
            onChange={handlePriceChange}
            required
          >
            <option value="" disabled>Price</option>
            {priceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Quantity:</label>
          <input
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div>
          <label>Special Instructions:</label>
          <textarea
            name="special_instructions"
            value={formData.special_instructions}
            onChange={(e) => setFormData({ ...formData, special_instructions: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderNow;
