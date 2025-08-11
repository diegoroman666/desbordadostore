import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import Slider from "../components/Slider";
import { products } from '../data/Products';
import CartContext from '../context/CartContext';

function Home() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    // Simulamos la carga de datos del archivo products.js
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });

    fetchProductos.then((data) => {
      setProductos(data);
      setCargando(false);
    });
  }, []);

  const handleAddToCart = (producto) => {
    addItem(producto);
  };

  return (
    <Container fluid className="p-0">
      <Slider />
      <Container className="my-5">
        <h1 className="text-center mb-5 fw-bold text-uppercase">Productos Destacados</h1>
        {cargando ? (
          <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        ) : productos.length === 0 ? (
          <Alert variant="warning" className="text-center">
            No se encontraron productos.
          </Alert>
        ) : (
          <Row className="g-4">
            {productos.map((producto) => (
              <Col xs={12} sm={6} md={4} lg={3} key={producto.id}>
                <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <Card.Img variant="top" src={producto.image} alt={producto.name} className="card-img-top" />
                  <Card.Body className="d-flex flex-column text-center p-3">
                    <Card.Title className="fw-bold text-dark">{producto.name}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">{producto.description}</Card.Text>
                    <h5 className="text-primary fw-bold mb-3">${producto.price.toFixed(2)}</h5>
                    <Button
                      variant="dark"
                      className="mt-auto fw-bold rounded-pill"
                      onClick={() => handleAddToCart(producto)}
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
  );
}

export default Home;
