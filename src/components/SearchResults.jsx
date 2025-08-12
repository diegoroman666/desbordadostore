import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import CartContext from '../context/CartContext';
import { products } from '../data/Products';

// Función auxiliar para obtener el parámetro de búsqueda de la URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext);
  const query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    setLoading(true);
    // Filtramos los productos en base al término de búsqueda
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Simulamos un pequeño retraso para la carga
    setTimeout(() => {
      setSearchResults(filtered);
      setLoading(false);
    }, 500);
  }, [searchTerm]); // Se vuelve a ejecutar cada vez que cambia el término de búsqueda

  const handleAddToCart = (producto) => {
    addItem(producto);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold text-uppercase">
        Resultados para: "{searchTerm}"
      </h2>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : searchResults.length === 0 ? (
        <Alert variant="warning" className="text-center rounded-4 shadow-sm">
          No se encontraron productos que coincidan con tu búsqueda.
        </Alert>
      ) : (
        <Row className="g-4">
          {searchResults.map((producto) => (
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

export default SearchResults;
