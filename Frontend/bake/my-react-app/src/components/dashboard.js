import React, { useState, useEffect } from 'react';
import ProductService from '../services/productservices';
//import './dash.css';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    category_id: '',
    image: ''
  });
  const [message, setMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const [showCreateForm, setShowCreateForm] = useState(false); // State to toggle create form visibility
  const [showUpdateForm, setShowUpdateForm] = useState(false); // State to toggle update form visibility
  const [showDeleteForm, setShowDeleteForm] = useState(false); // State to toggle delete form visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status

  useEffect(() => {
    // Simulate authentication and admin status based on some logic
    const isAuthenticatedUser = checkAuthentication(); // Implement your authentication logic here
    setIsAuthenticated(isAuthenticatedUser);
    if (isAuthenticatedUser) {
      const isAdminUser = checkAdminStatus(); // Implement your admin check logic here
      setIsAdmin(isAdminUser);
      fetchProducts();
    }
  }, []);

  const checkAuthentication = () => {
    // Simulated check, replace with actual logic to determine authentication status
    return true; // For demonstration, assuming user is authenticated
  };

  const checkAdminStatus = () => {
    // Simulated check, replace with actual logic to determine admin status
    return true; // For demonstration, assuming user is admin
  };

  const fetchProducts = async () => {
    try {
      const productsData = await ProductService.getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductById = async (productId) => {
    try {
      const product = await ProductService.getProductById(productId);
      setProductData({
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: product.quantity,
        category_id: product.category_id,
        image: product.image
      });
      setShowUpdateForm(true); // Show update form on fetch
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
    }
  };

  const handleCreateProduct = async () => {
    try {
      const response = await ProductService.createProduct(productData);
      setMessage(response.message || 'Product created successfully');
      fetchProducts();
      clearProductData();
    } catch (error) {
      setMessage(`Error creating product: ${error.message}`);
    }
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      const response = await ProductService.updateProduct(productId, updatedData);
      setMessage(response.message || 'Product updated successfully');
      fetchProducts();
      setShowUpdateForm(false); // Hide update form after update
    } catch (error) {
      setMessage(`Error updating product: ${error.message}`);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await ProductService.deleteProduct(productId);
      setMessage(response.message || 'Product deleted successfully');
      fetchProducts();
      setShowDeleteForm(false); // Hide delete form after delete
    } catch (error) {
      setMessage(`Error deleting product: ${error.message}`);
    }
  };

  const clearProductData = () => {
    setProductData({
      name: '',
      price: '',
      description: '',
      quantity: '',
      category_id: '',
      image: ''
    });
  };

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
    setShowUpdateForm(false); // Hide update form
    setShowDeleteForm(false); // Hide delete form
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
    setShowCreateForm(false); // Hide create form
    setShowDeleteForm(false); // Hide delete form
  };

  const toggleDeleteForm = () => {
    setShowDeleteForm(!showDeleteForm);
    setShowCreateForm(false); // Hide create form
    setShowUpdateForm(false); // Hide update form
  };

  if (!isAuthenticated) {
    return <div>You are not authenticated to see or access the dashboard.</div>;
  }

  return (
    <div className="container">
      {isAdmin && (
        <div className="section">
          <h3>
            <a href="#" onClick={toggleCreateForm}>Create Product</a>
          </h3>
          {showCreateForm && (
            <div className="create-product-form">
              {/* Form for creating a product */}
            </div>
          )}

          <div className="section">
            <h3>
              <a href="#" onClick={toggleUpdateForm}>Update Product</a>
            </h3>
            {showUpdateForm && (
              <div className="update-product-form">
                {/* Form for updating a product */}
              </div>
            )}
          </div>

          <div className="section">
            <h3>
              <a href="#" onClick={toggleDeleteForm}>Delete Product</a>
            </h3>
            {showDeleteForm && (
              <div className="delete-product-form">
                {/* Form for deleting a product */}
              </div>
            )}
          </div>

          <div className="section">
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <div className="button-group">
                    <button onClick={() => fetchProductById(product.id)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
