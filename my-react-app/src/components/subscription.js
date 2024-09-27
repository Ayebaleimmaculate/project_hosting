import React, { useState } from 'react';
import './subscription.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('weekly'); // Default to weekly

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/subscription/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, frequency }),
      });

      if (!response.ok) {
        throw new Error('Failed to create subscription');
      }

      const data = await response.json();
      console.log('Subscription created:', data);
      // Optionally handle success feedback to the user
    } catch (error) {
      console.error('Error creating subscription:', error.message);
      // Optionally handle error feedback to the user
    }
  };

  return (
    <div className="subscriptionPage">
      <h1>Subscription</h1>
      <p>Subscribe to receive delicious treats from our bakery on a regular basis!</p>

      <div className="subscriptionDetails">
        <h2>How It Works</h2>
        <p>Subscribe to our bakery's subscription service and receive:</p>
        <ul>
          <li>Weekly, bi-weekly, or monthly deliveries of our freshly baked goods.</li>
          <li>Special discounts and offers exclusively for subscribers.</li>
          <li>Flexibility to manage your subscription online.</li>
        </ul>
      </div>

      <div className="subscriptionForm">
        <h2>Subscribe Now</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="frequency">Delivery Frequency:</label>
          <select
            id="frequency"
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
