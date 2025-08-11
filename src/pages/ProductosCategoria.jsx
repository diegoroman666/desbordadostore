import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import CartContext from '../context/CartContext';
import { products } from '../data/Products';

function ProductosCategoria() {
  const { nombre } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setCargando(true);
    // Filtramos productos directamente del array global
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === nombre.toLowerCase()
    );
    // Simulamos un retraso para la carga
    setTimeout(() => {
      setProductos(filtered);
      setCargando(false);
    }, 500);
  }, [nombre]);

  const handleAddToCart = (producto) => {
    addItem(producto);
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-capitalize fw-bold text-dark">Categoría: {nombre}</h1>
        <Button variant="outline-dark" as={Link} to="/categorias" className="fw-bold rounded-pill">
          ← Volver a Categorías
        </Button>
      </div>

      {cargando ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : productos.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No se encontraron productos para esta categoría.
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
  );
}

export default ProductosCategoria;
