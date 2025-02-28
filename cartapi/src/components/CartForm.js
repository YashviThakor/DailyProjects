import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import dayjs from "dayjs";

const CartForm = ({ onSubmit, initialValues = {} }) => {
  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      initialValues={{
        ...initialValues,
        date: initialValues.date ? dayjs(initialValues.date) : null, // ✅ Fix
      }}
    >
      <Form.Item label="Cart Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Date" name="date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};

export default CartForm;
