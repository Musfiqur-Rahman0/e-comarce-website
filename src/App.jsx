import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order"; // Make sure this path is correct
import Products from "./Components/Products";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} /> {/* Update this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
