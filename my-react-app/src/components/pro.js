import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/productfrom'; // Ensure the path is correct

const API_URL = 'http://127.0.0.1:5000/api/v1/products';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false); // To trigger data refresh

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
      setRefresh(!refresh); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Categorize products by category_id and then by size
  const categorizeAndSizeProducts = () => {
    const categories = {
      '1': 'Wedding Cakes',
      '2': 'Birthday Cakes',
      '3': 'Anniversary Cakes',
      '4': 'Baby Shower Cakes',
      '5': 'Graduation Cakes',
      '6': 'Muffins',
      '7': 'Doughnuts'
    };

    const categorized = {};
    products.forEach(product => {
      const categoryName = categories[product.category_id] || 'Uncategorized';
      const sizeCategory = product.size || 'Unknown Size';

      if (!categorized[categoryName]) {
        categorized[categoryName] = { small: [], medium: [], large: [] };
      }

      // Organize products by size
      if (sizeCategory === 'small') {
        categorized[categoryName].small.push(product);
      } else if (sizeCategory === 'medium') {
        categorized[categoryName].medium.push(product);
      } else if (sizeCategory === 'large') {
        categorized[categoryName].large.push(product);
      } else {
        categorized[categoryName].unknown.push(product);
      }
    });

    return categorized;
  };

  const categorizedProducts = categorizeAndSizeProducts();

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {selectedProduct && <ProductForm product={selectedProduct} onClose={() => setSelectedProduct(null)} onSuccess={() => setRefresh(!refresh)} />}
      {Object.keys(categorizedProducts).length ? (
        Object.keys(categorizedProducts).map(category => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            {['small', 'medium', 'large'].map(size => (
              <div key={size} className={`size-section ${size}`}>
                <h4>{size.charAt(0).toUpperCase() + size.slice(1)} Size</h4>
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
                    {categorizedProducts[category][size].map(product => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{category}</td>
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
            ))}
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default ProductList;
