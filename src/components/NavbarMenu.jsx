import React, { useContext } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from '../context/CartContext';

function NavbarMenu() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Ecommerce Mujer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categorias" className="fs-5">Categorías</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/carrito" className="position-relative">
              <FaShoppingCart size={20} /> Carrito
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
