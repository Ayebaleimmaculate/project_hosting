import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/products';

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw error;
    }
  },

  createProduct: async (productData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${BASE_URL}/create`, productData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token for authorization
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  updateProduct: async (productId, productData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${BASE_URL}/${productId}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token for authorization
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating product ${productId}:`, error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${BASE_URL}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token for authorization
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting product ${productId}:`, error);
      throw error;
    }
  },
};

export default ProductService;
