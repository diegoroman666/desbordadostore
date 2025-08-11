import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Se agregó el ícono de carrito

function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Desbordado Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/carrito">
              <FaShoppingCart size={20} /> Carrito (0)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
