
import React, { useState } from 'react';
import { registerCustomer, updateCustomer, deleteCustomer } from './customerservice';

function CustomerServices() {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState({});
  const [message, setMessage] = useState('');

  const handleRegisterCustomer = async () => {
    try {
      const response = await registerCustomer(customerData);
      setMessage(response.message || 'Customer registered successfully');
    } catch (error) {
      setMessage(`Error registering customer: ${error.message}`);
    }
  };

  const handleUpdateCustomer = async () => {
    try {
      const response = await updateCustomer(customerId, customerData);
      setMessage(response.message || 'Customer updated successfully');
    } catch (error) {
      setMessage(`Error updating customer: ${error.message}`);
    }
  };

  const handleDeleteCustomer = async () => {
    try {
      const response = await deleteCustomer(customerId);
      setMessage(response.message || 'Customer deleted successfully');
    } catch (error) {
      setMessage(`Error deleting customer: ${error.message}`);
    }
  };

  return (
    <div>
      <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} placeholder="Enter Customer ID" />
      <br />
      <textarea value={JSON.stringify(customerData, null, 2)} rows="5" readOnly />
      <br />
      <button onClick={handleRegisterCustomer}>Register Customer</button>
      <button onClick={handleUpdateCustomer}>Update Customer</button>
      <button onClick={handleDeleteCustomer}>Delete Customer</button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default CustomerServices;
