import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Badge, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../context/CartContext';

function NavbarMenu() {
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
        <Navbar.Brand as={Link} to="/" className="arabic-style-logo">
          Cioro Store
        </Navbar.Brand>
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
            <Button variant="outline-light" type="submit">
              🔍
            </Button>
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

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Scheherazade:wght@400;700&display=swap');

          .modern-navbar {
            background-color: #1a1a1a !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.7);
            animation: slideDown 0.8s ease-in-out;
            font-family: 'Scheherazade', serif;
          }

          @keyframes slideDown {
            0% { transform: translateY(-100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          /* Logo estilo árabe */
          .arabic-style-logo {
            font-size: 2rem;
            font-weight: bold;
            color: #FFD700 !important;
            text-shadow:
              0 0 5px #FFD700,
              0 0 10px #FFD700,
              0 0 15px #FFA500,
              0 0 20px #FFA500;
            transition: transform 0.3s ease, text-shadow 0.3s ease;
            font-family: 'Scheherazade', serif;
          }
          .arabic-style-logo:hover {
            transform: scale(1.08);
            text-shadow:
              0 0 10px #FFD700,
              0 0 20px #FFD700,
              0 0 25px #FFA500,
              0 0 30px #FFA500;
          }

          /* Links estilo árabe */
          .arabic-style-link {
            font-size: 1.3rem;
            font-weight: bold;
            color: #FFD700 !important;
            margin-left: 1.2rem;
            text-shadow:
              0 0 3px #FFD700,
              0 0 6px #FFD700,
              0 0 9px #FFA500;
            transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
            font-family: 'Scheherazade', serif;
          }
          .arabic-style-link:hover {
            color: #FFA500 !important;
            transform: scale(1.05);
            text-shadow:
              0 0 5px #FFA500,
              0 0 10px #FFA500,
              0 0 15px #FFD700,
              0 0 20px #FFD700;
          }

          /* Input de búsqueda estilo árabe */
          .arabic-style-input {
            font-family: 'Scheherazade', serif;
            color: #FFD700;
            background-color: #2a2a2a;
            border: 1px solid #FFD700;
            text-align: left;
            transition: box-shadow 0.3s ease;
          }
          .arabic-style-input:focus {
            box-shadow: 0 0 10px #FFD700;
            outline: none;
          }

          /* Botón hamburguesa dorado */
          .custom-toggler {
            border-color: #FFD700;
          }
          .custom-toggler .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255,215,0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }
        `}
      </style>
    </Navbar>
  );
}

export default NavbarMenu;
