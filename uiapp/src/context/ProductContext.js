import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "DELETE_PRODUCT":
      return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch({ type: "SET_PRODUCTS", payload: res.data }))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
