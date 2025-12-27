import { Routes, Route } from "react-router";

import "./App.css";

import HomePage from "./pages/Homepage";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
