import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Badge, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../context/CartContext';
import "./NavbarMenu.css";

function NavbarMenu({ theme, toggleTheme }) {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buscar?q=${searchTerm}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="modern-navbar shadow-lg p-3">
      <Container>
        {/* LOGO ANIMADO + TEXTO */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <div className="navbar-logo-animated">
            <span className="logo-part-1">Ci</span>
            <div className="pyramid-eye-o">
              <div className="pyramid"></div>
              <div className="eye"></div>
            </div>
            <span className="logo-part-2">ro</span>
          </div>
          <span className="store-text">Store</span>
        </Navbar.Brand>

        {/* Botón tema fijo en móvil */}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="menu" className="custom-toggler" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="arabic-style-link">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categorias" className="arabic-style-link">Categorías</Nav.Link>
          </Nav>

          <Form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Buscar productos..."
              className="me-2 arabic-style-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">🔍</Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/carrito" className="position-relative ms-lg-3 text-white arabic-style-link">
              🛒 Carrito
              {cartItemCount > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
