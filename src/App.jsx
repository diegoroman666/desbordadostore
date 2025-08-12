import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import ProductosCategoria from "./pages/ProductosCategoria";
import Cart from "./pages/Cart";
import SearchResults from "./components/SearchResults";
import Transfer from "./pages/Transfer"; // Importamos el nuevo componente de pago
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
          <Route path="/carrito" element={<Cart />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/transferencia" element={<Transfer />} /> {/* Nueva ruta para el pago */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
