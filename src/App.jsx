import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import ProductosCategoria from "./pages/ProductosCategoria";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarMenu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoria/:nombre" element={<ProductosCategoria />} />
          {/* Ruta corregida para el carrito */}
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
