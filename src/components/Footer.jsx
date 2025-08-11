// src/pages/Home.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Vestido Rojo Elegante",
    description: "Perfecto para cenas y eventos especiales.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1520975918313-60d99c57d0a4?w=600"
  },
  {
    id: 2,
    name: "Blusa Blanca Clásica",
    description: "Combinable con cualquier estilo.",
    price: 34.50,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600"
  },
  {
    id: 3,
    name: "Falda Negra Formal",
    description: "Ideal para la oficina o reuniones.",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1583497133828-2a29a9f86a1e?w=600"
  },
  {
    id: 4,
    name: "Pantalón Beige Casual",
    description: "Cómodo y elegante para el día a día.",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1593032465171-8f1dc8e6609c?w=600"
  },
  {
    id: 5,
    name: "Chaqueta de Cuero Negra",
    description: "Estilo y protección en un solo producto.",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1605733160314-4e0138213c32?w=600"
  },
  {
    id: 6,
    name: "Blusa Azul Satinada",
    description: "Suave al tacto y con caída elegante.",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1591348279056-61c8e8b1e22d?w=600"
  },
  {
    id: 7,
    name: "Vestido Floral Verano",
    description: "Fresco y cómodo para días soleados.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1520974735194-98f7f2e62c94?w=600"
  },
  {
    id: 8,
    name: "Pantalón Negro Skinny",
    description: "Ajuste perfecto para un look moderno.",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1583497019390-9e1e05a4d2e7?w=600"
  },
  {
    id: 9,
    name: "Falda Plisada Rosa",
    description: "Añade un toque femenino a tu outfit.",
    price: 42.50,
    image: "https://images.unsplash.com/photo-1567975058716-9d3d43f5f1af?w=600"
  },
  {
    id: 10,
    name: "Blusa Negra de Encaje",
    description: "Ideal para la noche y eventos especiales.",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1616683693008-ff4c1b9a2b58?w=600"
  },
  {
    id: 11,
    name: "Pantalón Blanco Recto",
    description: "Look minimalista y elegante.",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1573497019327-2b1b1d3d6c0f?w=600"
  },
  {
    id: 12,
    name: "Vestido Negro Corto",
    description: "Un clásico que nunca pasa de moda.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1523264766116-1d86d6b8c8e8?w=600"
  }
];

export default function Home() {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Catálogo de Ropa para Mujer</h1>
      <Row>
        {products.map((product) => (
          <Col md={4} lg={3} className="mb-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>${product.price.toFixed(2)}</strong></Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
