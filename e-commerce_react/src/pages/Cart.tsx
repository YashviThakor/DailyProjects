import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('StoreContext must be used within a StoreProvider');

  const { state, dispatch } = context;

  return (
    <div className="container">
      <h1 className="text-center mt-4">Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        state.cart.map((item) => (
          <div key={item.id} className="card my-3 shadow-sm">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={item.image} className="img-fluid p-3" alt={item.title} />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                          className="btn btn-danger">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
