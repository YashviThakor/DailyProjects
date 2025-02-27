import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Form, Input, Button } from "antd";

const ProductForm = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const product = state.products.find(p => p.id == id) || { title: "", price: "" };

  const onFinish = (values) => {
    console.log("Updated Product:", values);
    navigate(`/products/${id}`);
  };

  return (
    <Form initialValues={product} onFinish={onFinish}>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Save</Button>
    </Form>
  );
};

export default ProductForm;
