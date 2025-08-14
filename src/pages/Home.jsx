import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import Slider from "../components/Slider";
import { products } from "../data/Products";
import CartContext from "../context/CartContext";
import "./Home.css";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { addItem } = useContext(CartContext);

  // Estado para tema
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const t = setTimeout(() => {
      setProductos(products);
      setCargando(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const handleAddToCart = (p) => addItem(p);

  // Manejar cambio de tema
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Container fluid className="p-0">
        <Slider items={productos} />

        <Container className="py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="section-title-custom">
              Productos Destacados
            </h1>
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={toggleTheme}
              className="rounded-circle theme-toggle-btn"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </div>

          {cargando ? (
            <div className="text-center my-5">
              <Spinner animation="border" role="status" variant={darkMode ? "light" : "dark"}>
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
            </div>
          ) : productos.length === 0 ? (
            <Alert variant="warning" className="text-center">
              No se encontraron productos.
            </Alert>
          ) : (
            <Row className="g-5">
              {productos.map((p) => (
                <Col xs={12} sm={6} md={4} lg={3} key={p.id}>
                  <Card className="card-product h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={p.image}
                      alt={p.name}
                      className="card-product-img"
                    />
                    <Card.Body className="d-flex flex-column text-center p-4 gap-2">
                      <Card.Title className="fw-bold mb-1">{p.name}</Card.Title>
                      <Card.Text className="flex-grow-1 line-clamp-2">
                        {p.description}
                      </Card.Text>
                      <h5 className="fw-bold mb-3">${Number(p.price).toFixed(2)}</h5>
                      <Button
                        variant={darkMode ? "light" : "dark"}
                        className="mt-auto fw-bold rounded-pill px-4"
                        onClick={() => handleAddToCart(p)}
                      >
                        Agregar al carrito
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Container>
    </div>
  );
}
