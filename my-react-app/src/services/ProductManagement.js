import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1/products';

export function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [refresh]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const ProductForm = ({ product, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
      name: '',
      category_id: '',
      price: '',
      quantity: '',
      image: '',
      size: '',
    });

    useEffect(() => {
      if (product) {
        setFormData({
          name: product.name || '',
          category_id: product.category_id || '',
          price: product.price || '',
          quantity: product.quantity || '',
          image: product.image || '',
          size: product.size || '',
        });
      }
    }, [product]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (product) {
          await axios.put(`${API_URL}/${product.id}`, formData);
        } else {
          await axios.post(API_URL, formData);
        }
        onSuccess();
        onClose();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    return (
      <div className="product-form">
        <h3>{product ? 'Edit Product' : 'Create Product'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Category ID:
            <input type="text" name="category_id" value={formData.category_id} onChange={handleChange} required />
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
          <button type="submit">{product ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      {selectedProduct && (
        <ProductForm
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSuccess={() => setRefresh(!refresh)}
        />
      )}
      <button onClick={() => setSelectedProduct({})}>Create New Product</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category_id}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
              <td>{product.size}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
