import  { useState, useEffect } from 'react';
import productsData from '../api/products.json'; // Import the JSON file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Simulate fetching data from the JSON file
  useEffect(() => {
    setProducts(productsData); // Set the imported products data
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.image} alt={product.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;