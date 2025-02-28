import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/cartStore";

const CartDetailPage = () => {
  const { id } = useParams();
  const { cart, fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, []);

  const cartItem = cart.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>Cart Details (ID: {id})</h2>
      <pre>{JSON.stringify(cartItem, null, 2)}</pre>
    </div>
  );
};

export default CartDetailPage;
