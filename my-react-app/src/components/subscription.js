import React from 'react';
import './subscription.css';
const Subscription = () => {
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
        <form>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />

          <label htmlFor="frequency">Delivery Frequency:</label>
          <select id="frequency" name="frequency">
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
