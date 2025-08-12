import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, Badge, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
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
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Desbordado Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/categorias" className="fs-5">Categorías</Nav.Link>
          </Nav>
          <Form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Buscar productos..."
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/carrito" className="position-relative ms-lg-3">
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
