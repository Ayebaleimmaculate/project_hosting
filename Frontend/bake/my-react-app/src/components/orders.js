import React, { useState } from 'react';
//import './order.css';

const OrderOnline = () => {
    const [formData, setFormData] = useState({
        customer_id: '',
        product_id: '',
        user_id: '',
        status: '',
        quantity: '',
        total_price: '',
        gender: '',
        special_instructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/api/v1/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || 'Order creation failed');
            }

            console.log(responseData.message);
            // Optionally handle success, e.g., show a success message, redirect, etc.

            // Reset form fields after successful submission
            setFormData({
                customer_id: '',
                product_id: '',
                user_id: '',
                status: '',
                quantity: '',
                total_price: '',
                gender : '',
                special_instructions: ''
            });

        } catch (error) {
            console.error('Error creating order:', error.message);
            // Optionally handle error, e.g., show an error message to the user
        }
    };

    return (
        <div>
            <h2>Order Online</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="customer_id">Customer ID:</label>
                    <input
                        type="text"
                        id="customer_id"
                        name="customer_id"
                        value={formData.customer_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="product_id">Product ID:</label>
                    <input
                        type="text"
                        id="product_id"
                        name="product_id"
                        value={formData.product_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user_id">User ID:</label>
                    <input
                        type="text"
                        id="user_id"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="total_price">Total Price:</label>
                    <input
                        type="text"
                        id="total_price"
                        name="total_price"
                        value={formData.total_price}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="special_instructions">Special Instructions:</label>
                    <textarea
                        id="special_instructions"
                        name="special_instructions"
                        value={formData.special_instructions}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OrderOnline;
