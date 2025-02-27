import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Input, message } from "antd";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  
  const product = state.products.find((p) => p.id === parseInt(id));

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleEdit = () => {
    dispatch({ type: "EDIT_PRODUCT", payload: { id: parseInt(id), title, price } });
    message.success("Product updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: parseInt(id) });
      message.success("Product deleted successfully!");
      navigate("/products");
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <Card
      title="Edit Product"
      style={{ maxWidth: 400, margin: "auto", textAlign: "center" }}
    >
      <Input
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder="Product Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleEdit} style={{ marginRight: 10 }}>Save Changes</Button>
      <Button type="danger" onClick={handleDelete}>Delete</Button>
    </Card>
  );
};

export default ProductDetails;
