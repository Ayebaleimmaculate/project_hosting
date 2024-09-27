import React, { useState, useEffect } from 'react';
import  axios from 'axios';
import UserManagement from '../services/UserManagement';
import ProductManagement from '../services/ProductManagement';
import ContactManagement from '../services/ContactManagement';
import OrderManagement from '../services/OrderManagement';
import './dash.css';
const API_URL = 'http://127.0.0.1:5000/api/v1';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('users');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li onClick={() => handleTabChange('users')}>User Management</li>
          <li onClick={() => handleTabChange('products')}>Product Management</li>
          <li onClick={() => handleTabChange('contacts')}>Contact Management</li>
          <li onClick={() => handleTabChange('orders')}>Order Management</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'products' && <ProductManagement />}
        {activeTab === 'contacts' && <ContactManagement />}
        {activeTab === 'orders' && <OrderManagement />}
      </div>
    </div>
  );
}

export default Dashboard;
