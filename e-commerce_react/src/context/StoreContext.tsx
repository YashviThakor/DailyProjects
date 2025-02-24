import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Product Type
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

// State Type
interface State {
  products: Product[];
  cart: Product[];
  adminLoggedIn: boolean;
}

// Actions Type
type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'EDIT_PRODUCT'; payload: Product }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'LOGIN_ADMIN' }
  | { type: 'LOGOUT_ADMIN' };

// Initial State
const initialState: State = {
  products: [],
  cart: [],
  adminLoggedIn: false,
};

// Reducer Function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    case 'LOGIN_ADMIN':
      return { ...state, adminLoggedIn: true };
    case 'LOGOUT_ADMIN':
      return { ...state, adminLoggedIn: false };
    default:
      return state;
  }
};

// Context Type
interface StoreContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// Create Context
export const StoreContext = createContext<StoreContextProps | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
}

// Store Provider Component
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => dispatch({ type: 'SET_PRODUCTS', payload: res.data }))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
