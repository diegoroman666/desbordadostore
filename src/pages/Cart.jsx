import React, { useContext } from "react";
import { Container, Row, Col, Button, ListGroup, Alert } from "react-bootstrap";
import CartContext from '../context/CartContext';
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  // Calcula el total del precio del carrito
  const cartTotal = cart.reduce((acc, item) => acc + parseFloat(item.precio.replace('$', '').replace('.', '')), 0);
  
  // Función para agrupar productos duplicados y contar la cantidad
  const groupedCartItems = cart.reduce((acc, item) => {
    const existingItem = acc.find(prod => prod.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <Alert variant="info" className="text-center">
          El carrito está vacío. ¡<Link to="/">Explora nuestros productos</Link>!
        </Alert>
      ) : (
        <>
          <ListGroup className="mb-4">
            {groupedCartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center">
                  <Col xs={7}>
                    <h5 className="mb-1">{item.nombre}</h5>
                    <p className="mb-1">Precio: {item.precio}</p>
                    <p className="mb-0">Cantidad: {item.quantity}</p>
                  </Col>
                  <Col xs={3} className="text-end">
                    <h5 className="mb-0">Total: ${parseFloat(item.precio.replace('$', '').replace('.', '')) * item.quantity}</h5>
                  </Col>
                  <Col xs={2} className="text-end">
                    <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-end mb-4">
            <h4>Total del carrito: ${cartTotal.toFixed(2)}</h4>
          </div>
          <div className="d-grid gap-2">
            <Button variant="success" size="lg">Proceder al pago</Button>
            <Button variant="secondary" size="lg" as={Link} to="/">Continuar comprando</Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
