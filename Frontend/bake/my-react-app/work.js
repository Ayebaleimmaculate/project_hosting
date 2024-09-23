import React from 'react';
import UserManagement from '../services/userservices'; 
import ProductService from '../services/productservices'; 
import CustomerServices from '../services/customersservices'; 
import ContactServices from '../services/contactservices'; 
import CategoryServices from '../services/categoryservices';
import InventoryService from '../services/inventoryservices'; 
import OrderServices from '../services/orderservices'; 

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      
      <div className="section">
        <h3>User Management</h3>
        <UserManagement />
      </div>

      <div className="section">
        <h3>Product Service</h3>
        <ProductService />
      </div>

      <div className="section">
        <h3>Customer Service</h3>
        <CustomerServices />
      </div>

      <div className="section">
        <h3>Contact Service</h3>
        <ContactServices />
      </div>

      <div className="section">
        <h3>Category Service</h3>
        <CategoryServices />
      </div>

      <div className="section">
        <h3>Inventory Service</h3>
        <InventoryService />
      </div>

      <div className="section">
        <h3>Order Service</h3>
        <OrderServices />
      </div>
    </div>
  );
}

export default Dashboard;
