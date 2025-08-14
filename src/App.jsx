import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import ProductosCategoria from "./pages/ProductosCategoria";
import Cart from "./pages/Cart";
import SearchResults from "./components/SearchResults";
import Transfer from "./pages/Transfer";
import Confirmation from "./pages/Confirmation";
import CartProvider from "./context/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    // Se utiliza un contenedor Flexbox para empujar el footer hacia abajo.
    // min-h-screen asegura que el contenedor ocupe al menos toda la altura de la ventana.
    // flex-col organiza los hijos en una columna.
    <Router>
      <CartProvider>
        {/* Este div principal es el contenedor Flexbox */}
        <div className="flex flex-col min-h-screen">
          {/* El componente NavbarMenu se renderiza aquí */}
          <NavbarMenu />
          {/* El div principal del contenido tiene flex-grow para ocupar el espacio restante */}
          <main className="flex-grow">
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
          {/* El componente Footer se renderiza aquí, fuera del bloque main */}
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;