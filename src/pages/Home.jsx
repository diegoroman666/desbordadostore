import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import Slider from "../components/Slider";

function Home() {
  // Usamos el estado para almacenar los productos y el estado de carga
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  // Nuevo estado para el carrito de compras
  const [cart, setCart] = useState([]);

  // Función para manejar el evento de "Agregar al carrito"
  const handleAddToCart = (producto) => {
    // Aquí agregamos el producto al estado del carrito
    setCart([...cart, producto]);
    console.log("Producto agregado al carrito:", producto.nombre);
  };

  // Usamos useEffect para simular la carga de datos de una API
  useEffect(() => {
    // Simulamos una demora de 1 segundo para la carga de datos
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        const productosGenerados = Array.from({ length: 50 }, (_, index) => ({
          id: index + 1,
          nombre: `Producto ${index + 1}`,
          descripcion: "Ropa exclusiva para mujeres, calidad premium.",
          precio: `$${(Math.random() * (59990 - 19990) + 19990).toFixed(0)}`,
          imagen: `https://picsum.photos/300/300?random=${index + 1}`
        }));
        resolve(productosGenerados);
      }, 1000);
    });

    fetchProductos.then((data) => {
      setProductos(data);
      setCargando(false);
    });
  }, []); // El array de dependencias vacío asegura que se ejecute solo una vez al montar

  return (
    <Container fluid className="p-0">
      <Slider />
      <Container className="my-5">
        <h1 className="text-center mb-4">Productos Destacados</h1>
        {cargando ? (
          // Muestra un indicador de carga mientras se obtienen los productos
          <div className="text-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        ) : (
          // Muestra los productos una vez que la carga ha terminado
          <Row className="g-4">
            {productos.map((producto) => (
              <Col xs={12} sm={6} md={4} lg={3} key={producto.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <h5 className="text-primary">{producto.precio}</h5>
                    {/* El botón ahora llama a la función handleAddToCart */}
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
    </Container>
  );
}

export default Home;
