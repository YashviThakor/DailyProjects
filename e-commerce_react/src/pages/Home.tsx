import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Home = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('StoreContext must be used within a StoreProvider');

  const { state } = context;
  const [category, setCategory] = useState('');

  const filteredProducts = category
    ? state.products.filter((product) => product.category?.toLowerCase() === category.toLowerCase())
    : state.products;

  return (
    <div className="container">
      <h1 className="text-center mt-4">Products</h1>

      {/* Category Filter */}
      <select className="form-select my-3" onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} className="card-img-top p-3" alt={product.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
