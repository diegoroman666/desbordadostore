// Archivo: src/App.jsx
// El componente App ahora está envuelto en el CartProvider y tiene la importación corregida
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corregido: "react-router-router-dom" a "react-router-dom"
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import ProductosCategoria from "./pages/ProductosCategoria";
import Cart from "./pages/Cart";
import SearchResults from "./components/SearchResults"; // Corregido: la ruta ahora apunta a la carpeta "components"
import Transfer from "./pages/Transfer";
import Confirmation from "./pages/Confirmation";
import CartProvider from "./context/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavbarMenu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categoria/:nombre" element={<ProductosCategoria />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/buscar" element={<SearchResults />} />
            <Route path="/transferencia" element={<Transfer />} />
            <Route path="/confirmacion" element={<Confirmation />} />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;