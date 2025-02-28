import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, Button, DatePicker, message, Form } from "antd";
import dayjs from "dayjs";
import axios from "axios";

const EditCart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${id}`)
      .then((res) => {
        const cartData = res.data;
        if (cartData) {
          form.setFieldsValue({
            userId: cartData.userId,
            date: dayjs(cartData.date), // ✅ Convert date to dayjs object
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
      });
  }, [id, form]);

  const handleUpdate = (values) => {
    setLoading(true);
    axios
      .put(`https://fakestoreapi.com/carts/${id}`, {
        ...values,
        date: values.date ? values.date.format("YYYY-MM-DD") : "", // ✅ Ensure date format
      })
      .then(() => {
        message.success("Cart updated successfully!");
        navigate("/cart");
      })
      .catch((err) => {
        message.error("Failed to update cart!");
        console.error("Update error:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Edit Cart</h2>
      <Form form={form} layout="vertical" onFinish={handleUpdate}>
        <Form.Item label="User ID" name="userId">
          <Input />
        </Form.Item>
        <Form.Item label="Date" name="date">
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update Cart
        </Button>
      </Form>
    </div>
  );
};

export default EditCart;
