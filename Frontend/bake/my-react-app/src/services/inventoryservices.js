import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/inventory'; // Adjust base URL as needed

const InventoryService = {
  createInventoryItem: async (inventoryData) => {
    try {
      const response = await axios.post(`${BASE_URL}/create`, inventoryData);
      return response.data;
    } catch (error) {
      console.error('Error creating inventory item:', error);
      throw error; // Optionally handle or rethrow the error
    }
  },

  getInventoryItem: async (inventoryId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${inventoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching inventory item ${inventoryId}:`, error);
      throw error; // Optionally handle or rethrow the error
    }
  },

  updateInventoryItem: async (inventoryId, inventoryData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${inventoryId}`, inventoryData);
      return response.data;
    } catch (error) {
      console.error(`Error updating inventory item ${inventoryId}:`, error);
      throw error; // Optionally handle or rethrow the error
    }
  },

  deleteInventoryItem: async (inventoryId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${inventoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting inventory item ${inventoryId}:`, error);
      throw error; // Optionally handle or rethrow the error
    }
  },
};

export default InventoryService;
