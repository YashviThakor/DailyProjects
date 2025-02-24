import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(StoreContext);
  if (!context) throw new Error('StoreContext must be used within a StoreProvider');

  const { state, dispatch } = context;
  const product = state.products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
