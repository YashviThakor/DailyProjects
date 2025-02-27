import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";


const ProductList = () => {
  const { state } = useContext(ProductContext); // Get state from context

  if (state.loading) return <h2>Loading...</h2>;
  if (state.error) return <h2>Error: {state.error}</h2>;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {state.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
