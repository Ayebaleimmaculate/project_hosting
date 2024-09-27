import React, { useState } from 'react';
import { createCategory, updateCategory, deleteCategory } from './categoryservice';

function CategoryServices() {
  const [categoryId, setCategoryId] = useState('');
  const [categoryData, setCategoryData] = useState({});
  const [message, setMessage] = useState('');

  const handleCreateCategory = async () => {
    try {
      const response = await createCategory(categoryData);
      setMessage(response.message || `Category '${response.category.name}' created successfully`);
    } catch (error) {
      setMessage(`Error creating category: ${error.message}`);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await updateCategory(categoryId, categoryData);
      setMessage(response.message || `Category with ID '${categoryId}' updated successfully`);
    } catch (error) {
      setMessage(`Error updating category: ${error.message}`);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const response = await deleteCategory(categoryId);
      setMessage(response.message || 'Category deleted successfully');
    } catch (error) {
      setMessage(`Error deleting category: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Category Management</h2>
      <input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} placeholder="Enter Category ID" />
      <br />
      <textarea value={JSON.stringify(categoryData, null, 2)} rows="5" readOnly />
      <br />
      <button onClick={handleCreateCategory}>Create Category</button>
      <button onClick={handleUpdateCategory}>Update Category</button>
      <button onClick={handleDeleteCategory}>Delete Category</button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default CategoryServices;
