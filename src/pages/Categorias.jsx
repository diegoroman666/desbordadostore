import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { categories } from "../data/Products"; // Importamos las categorías del nuevo archivo
import { Link } from "react-router-dom";

function Categorias() {
  return (
    <Container className="my-5">
      <h2 className="mb-5 text-center fw-bold text-uppercase">Categorías</h2>
      <Row className="g-4 justify-content-center">
        {categories.map((cat) => (
          <Col xs={12} sm={6} md={4} lg={3} key={cat.id}>
            <Card className="shadow-lg h-100 text-center border-0 rounded-4 overflow-hidden">
              <Card.Img
                variant="top"
                src={`https://picsum.photos/300/200?random=${cat.id}`}
                alt={cat.nombre}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center p-4">
                <Card.Title className="fw-bold fs-5 text-dark">{cat.nombre}</Card.Title>
                <Link to={`/categoria/${cat.nombre.toLowerCase()}`} className="mt-3">
                  <Button variant="dark" className="fw-bold rounded-pill">Ver productos</Button>
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
