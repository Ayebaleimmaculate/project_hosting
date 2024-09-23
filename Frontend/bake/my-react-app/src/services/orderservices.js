import React, { useState } from 'react';
import { createOrder, getOrderById, updateOrder, deleteOrder } from './orderservice';

function OrderServices() {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState({});
  const [message, setMessage] = useState('');

  const handleCreateOrder = async () => {
    try {
      const response = await createOrder(orderData);
      setMessage(response.message || 'Order created successfully');
    } catch (error) {
      setMessage(`Error creating order: ${error.message}`);
    }
  };

  const handleGetOrder = async () => {
    try {
      const order = await getOrderById(orderId);
      setOrderData(order);
    } catch (error) {
      setMessage(`Error fetching order: ${error.message}`);
    }
  };

  const handleUpdateOrder = async () => {
    try {
      const response = await updateOrder(orderId, orderData);
      setMessage(response.message || 'Order updated successfully');
    } catch (error) {
      setMessage(`Error updating order: ${error.message}`);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      const response = await deleteOrder(orderId);
      setMessage(response.message || 'Order deleted successfully');
    } catch (error) {
      setMessage(`Error deleting order: ${error.message}`);
    }
  };

  return (
    <div>
      <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Enter Order ID" />
      <button onClick={handleGetOrder}>Get Order</button>
      <br />
      <textarea value={JSON.stringify(orderData, null, 2)} rows="5" readOnly />
      <br />
      <button onClick={handleCreateOrder}>Create Order</button>
      <button onClick={handleUpdateOrder}>Update Order</button>
      <button onClick={handleDeleteOrder}>Delete Order</button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default OrderServices;
