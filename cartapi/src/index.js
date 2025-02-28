import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Ensure this import is correct
import "antd/dist/reset.css";  // ✅ Ant Design styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
