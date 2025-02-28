import React, { useEffect } from "react";
import { List, Button } from "antd";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const CartPage = () => {
  const { cart, fetchCart, removeFromCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <List
      dataSource={cart}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/cart/${item.id}`}>Cart {item.id}</Link>
          <Button type="primary">
            <Link to={`/cart/edit/${item.id}`}>Edit</Link>
          </Button>
          <Button danger onClick={() => removeFromCart(item.id)}>
            Remove
          </Button>
        </List.Item>
      )}
    />
  );
};

export default CartPage;
