import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { categories } from "../data/categorias";
import { Link } from "react-router-dom";

function Categorias() {
  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Categorías</h2>
      <Row className="g-4">
        {categories.map((cat) => (
          <Col xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <Card.Title>{cat.nombre}</Card.Title>
                <Card.Img
                  variant="top"
                  src={`https://picsum.photos/300/200?random=${cat.id}`}
                  alt={cat.nombre}
                  className="mb-3"
                />
                <Link to={`/categoria/${cat.nombre.toLowerCase()}`}>
                  <Button variant="dark">Ver productos</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categorias;
