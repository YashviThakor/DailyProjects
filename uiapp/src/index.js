import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Fix
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
