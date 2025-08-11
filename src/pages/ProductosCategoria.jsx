import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import CartContext from '../context/CartContext';

// Simulación de una base de datos de productos
const allProducts = [
  // Productos de la categoría 'Vestidos'
  { id: 1, name: "Vestido Rojo Elegante", category: "Vestidos", description: "Perfecto para cenas y eventos especiales.", price: 79.99, image: "https://images.unsplash.com/photo-1520975918313-60d99c57d0a4?w=600" },
  { id: 2, name: "Vestido Floral Verano", category: "Vestidos", description: "Fresco y cómodo para días soleados.", price: 59.99, image: "https://images.unsplash.com/photo-1520974735194-98f7f2e62c94?w=600" },
  { id: 3, name: "Vestido Negro Corto", category: "Vestidos", description: "Un clásico que nunca pasa de moda.", price: 69.99, image: "https://images.unsplash.com/photo-1523264766116-1d86d6b8c8e8?w=600" },
  // Productos de la categoría 'Blusas'
  { id: 4, name: "Blusa Blanca Clásica", category: "Blusas", description: "Combinable con cualquier estilo.", price: 34.50, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600" },
  { id: 5, name: "Blusa Azul Satinada", category: "Blusas", description: "Suave al tacto y con caída elegante.", price: 39.90, image: "https://images.unsplash.com/photo-1591348279056-61c8e8b1e22d?w=600" },
  { id: 6, name: "Blusa Negra de Encaje", category: "Blusas", description: "Ideal para la noche y eventos especiales.", price: 55.00, image: "https://images.unsplash.com/photo-1616683693008-ff4c1b9a2b58?w=600" },
  // Productos de la categoría 'Chaquetas'
  { id: 7, name: "Chaqueta de Cuero Negra", category: "Chaquetas", description: "Estilo y protección en un solo producto.", price: 120.00, image: "https://images.unsplash.com/photo-1605733160314-4e0138213c32?w=600" },
  // Productos de la categoría 'Faldas'
  { id: 8, name: "Falda Negra Formal", category: "Faldas", description: "Ideal para la oficina o reuniones.", price: 45.00, image: "https://images.unsplash.com/photo-1583497133828-2a29a9f86a1e?w=600" },
  { id: 9, name: "Falda Plisada Rosa", category: "Faldas", description: "Añade un toque femenino a tu outfit.", price: 42.50, image: "https://images.unsplash.com/photo-1567975058716-9d3d43f5f1af?w=600" },
  // Productos de la categoría 'Pantalones'
  { id: 10, name: "Pantalón Beige Casual", category: "Pantalones", description: "Cómodo y elegante para el día a día.", price: 52.99, image: "https://images.unsplash.com/photo-1593032465171-8f1dc8e6609c?w=600" },
  { id: 11, name: "Pantalón Negro Skinny", category: "Pantalones", description: "Ajuste perfecto para un look moderno.", price: 48.00, image: "https://images.unsplash.com/photo-1583497019390-9e1e05a4d2e7?w=600" },
  { id: 12, name: "Pantalón Blanco Recto", category: "Pantalones", description: "Look minimalista y elegante.", price: 50.00, image: "https://images.unsplash.com/photo-1573497019327-2b1b1d3d6c0f?w=600" },
];


function ProductosCategoria() {
  const { nombre } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setCargando(true);
    // Simula una llamada a la API para filtrar productos por categoría
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        const filtered = allProducts.filter(
          (product) => product.category.toLowerCase() === nombre.toLowerCase()
        );
        resolve(filtered);
      }, 500);
    });

    fetchProductos.then((data) => {
      setProductos(data);
      setCargando(false);
    });
  }, [nombre]); // Se vuelve a ejecutar cuando el parámetro 'nombre' cambia

  const handleAddToCart = (producto) => {
    addItem(producto);
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-capitalize">Categoría: {nombre}</h1>
        <Button variant="outline-secondary" as={Link} to="/categorias">
          ← Volver a Categorías
        </Button>
      </div>

      {cargando ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status">
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
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={producto.image} alt={producto.name} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>{producto.description}</Card.Text>
                  <h5 className="text-primary">${producto.price.toFixed(2)}</h5>
                  <Button
                    variant="dark"
                    className="mt-auto"
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
