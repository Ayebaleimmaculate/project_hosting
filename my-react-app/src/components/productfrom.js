import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1/products';

export default function ProductForm({ product, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    category_id: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    size: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        category_id: product.category_id,
        name: product.name,
        description: product.description || '',
        price: product.price,
        quantity: product.quantity,
        image: product.image || '',
        size: product.size || ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await axios.put(`${API_URL}/${product.id}`, formData);
      } else {
        await axios.post(`${API_URL}/create`, formData);
      }
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="product-form">
      <h3>{product ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Category ID:
          <input type="text" name="category_id" value={formData.category_id} onChange={handleChange} required />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Size:
          <input type="text" name="size" value={formData.size} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
