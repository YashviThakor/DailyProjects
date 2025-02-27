import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Input, Button, Form } from "antd";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  const [form] = Form.useForm();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = state.products.find((p) => p.id === Number(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      form.setFieldsValue({
        title: selectedProduct.title,
        price: selectedProduct.price,
      });
    }
  }, [id, state.products, form]);

  const handleUpdate = (values) => {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: { ...product, title: values.title, price: values.price },
    });
    navigate(`/products/${id}`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Form form={form} onFinish={handleUpdate} layout="vertical">
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Update</Button>
    </Form>
  );
};

export default EditProduct;
