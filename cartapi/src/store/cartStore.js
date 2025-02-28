import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: [],

  fetchCart: async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/carts");
      set({ cart: data });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },

  fetchSingleCart: async (id) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/carts/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching single cart:", error);
    }
  },

  removeFromCart: async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/carts/${id}`);
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error removing cart:", error);
    }
  },
}));

export default useCartStore;
