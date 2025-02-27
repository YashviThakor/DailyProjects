import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Select, Card, Row, Col, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Products = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  
  const allProducts = state.products || [];
  const categories = state.categories || [];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    let products = allProducts;

    if (category) {
      products = products.filter((product) => product.category === category);
    }
    
    setFilteredProducts(products.slice(0, limit));
  }, [category, limit, allProducts]);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    message.success(`${product.title} added to cart!`);
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: productId });
      message.success("Product deleted successfully!");
    }
  };

  return (
    <div>
      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <Select
          placeholder="Filter by Category"
          style={{ width: 200 }}
          onChange={(value) => setCategory(value)}
          allowClear
        >
          <Option value="">All Categories</Option>
          {categories.map((cat) => (
            <Option key={cat} value={cat}>
              {cat}
            </Option>
          ))}
        </Select>

        <Select placeholder="Limit Products" style={{ width: 150 }} onChange={(value) => setLimit(value)}>
          {[5, 10, 15, 20].map((num) => (
            <Option key={num} value={num}>
              {num}
            </Option>
          ))}
        </Select>
      </div>

      {/* Product List */}
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={product.title}
              cover={<img src={product.image} alt={product.title} style={{ height: 200, objectFit: "contain" }} />}
            >
              <p>Price: ${product.price}</p>
              <Button type="primary" onClick={() => navigate(`/products/${product.id}`)}>Details</Button>
              <Button type="default" onClick={() => handleAddToCart(product)} style={{ marginLeft: 10 }}>Add to Cart</Button>
              <Button type="danger" onClick={() => handleDelete(product.id)} style={{ marginLeft: 10 }}>Delete</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
