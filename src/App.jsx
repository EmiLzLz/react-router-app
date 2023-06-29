import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SearchProduct from "./pages/SearchProduct";


function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <nav className="h-auto">
          <Link to={"/"}>Home</Link>
          <Link to={"/all"}>Contact</Link>
          <Link to={"/search"}>About</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all" element={<AllProducts />} />
          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
          <Route exact path="/search" element={<SearchProduct />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
