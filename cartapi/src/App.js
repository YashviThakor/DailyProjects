import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";  
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CartDetailPage from "./pages/CartDetailPage";
import ProductDetails from "./components/ProductDetails";
import CartForm from "./components/CartForm";

const { Content } = Layout;

const App = () => {
  console.log("App is rendering..."); // ✅ Debug Log
  return (
    <Router>
      <Layout>
        <Header />
        <Content style={{ padding: "20px" }}>
          <h1>Welcome to the Store</h1> {/* ✅ Add this for testing */}
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/:id" element={<CartDetailPage />} />
            <Route path="/cart/add" element={<CartForm />} />
            <Route path="/cart/edit/:id" element={<CartForm />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
