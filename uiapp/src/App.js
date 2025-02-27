import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
