import React, { useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import useProductStore from "../store/productStore";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col span={6} key={product.id}>
          <Card title={product.title} cover={<img alt="product" src={product.image} />}>
            <p>Price: ${product.price}</p>
            <Button type="primary">
              <Link to={`/products/${product.id}`}>Details</Link>
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
