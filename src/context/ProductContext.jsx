import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching from local JSON file (can be replaced with API URL)
    axios.get('/api/products.json').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired, // Step 3: Add validation for children prop
  };

export default ProductProvider;