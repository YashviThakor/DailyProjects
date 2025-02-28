import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    set({ products: data });
  },
}));

export default useProductStore;
