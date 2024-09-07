import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
    children: PropTypes.node.isRequired, 
  };

export default ProductProvider;