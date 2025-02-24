import React, { useContext, useState } from 'react';
import { StoreContext, Product } from '../context/StoreContext';

const Admin: React.FC = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('StoreContext must be used within a StoreProvider');

  const { state, dispatch } = context;
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [product, setProduct] = useState({ title: '', price: '', image: '', description: '', category: '' });

  // Admin Login
  const handleLogin = () => {
    if (password === 'admin123') {
      dispatch({ type: 'LOGIN_ADMIN' });
    } else {
      alert('Wrong password!');
    }
  };

  // Admin Logout
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_ADMIN' });
  };

  // Add / Edit Product
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.title || !product.price || !product.image || !product.description || !product.category) {
      alert("All fields are required!");
      return;
    }

    if (isEditing && editId !== null) {
      dispatch({
        type: 'EDIT_PRODUCT',
        payload: { ...product, id: editId, price: Number(product.price) },
      });
      setIsEditing(false);
      setEditId(null);
    } else {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: { ...product, id: Date.now(), price: Number(product.price) },
      });
    }

    setProduct({ title: '', price: '', image: '', description: '', category: '' });
    alert("Product saved successfully!");
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Admin Panel</h1>

      {!state.adminLoggedIn ? (
        <>
          <input type="password" className="form-control my-3" placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </>
      ) : (
        <>
          <button onClick={handleLogout} className="btn btn-danger mb-3">Logout</button>
          
          <h2>{isEditing ? "Edit Product" : "Add a New Product"}</h2>
          <form onSubmit={handleProductSubmit}>
            <input type="text" placeholder="Title" className="form-control my-2"
              value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />

            <input type="number" placeholder="Price" className="form-control my-2"
              value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

            <input type="text" placeholder="Image URL" className="form-control my-2"
              value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />

            <input type="text" placeholder="Category" className="form-control my-2"
              value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />

            <textarea placeholder="Description" className="form-control my-2"
              value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />

            <button type="submit" className="btn btn-success">{isEditing ? "Update Product" : "Add Product"}</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Admin;
