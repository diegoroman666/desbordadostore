// Archivo: src/pages/Cart.jsx
// Este archivo está correcto y no necesita cambios. Solo se muestra para referencia.
import React, { useContext } from "react";
import { Container, Row, Col, Button, ListGroup, Alert, Image } from "react-bootstrap";
import CartContext from '../context/CartContext';
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  const groupedCartItems = cart.reduce((acc, item) => {
    const existingItem = acc.find(prod => prod.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleProceedToPayment = () => {
    navigate("/transferencia");
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center fw-bold text-uppercase">Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <Alert variant="info" className="text-center rounded-4 shadow-sm p-4">
          El carrito está vacío. ¡<Link to="/" className="alert-link fw-bold">Explora nuestros productos</Link>!
        </Alert>
      ) : (
        <>
          <ListGroup className="mb-4 rounded-4 shadow-sm">
            {groupedCartItems.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image src={item.image} alt={item.name} rounded style={{ width: '80px', height: '80px', objectFit: 'cover' }} className="me-3" />
                  <div>
                    <h5 className="mb-1 fw-bold">{item.name}</h5>
                    <p className="mb-1 text-muted">Cantidad: {item.quantity}</p>
                    <p className="mb-0 fw-bold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeItem(item.id)} className="rounded-pill">
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="d-flex justify-content-end align-items-center mb-4 p-3 bg-light rounded-4 shadow-sm">
            <h4 className="fw-bold mb-0 me-3">Total del carrito:</h4>
            <h4 className="text-primary fw-bold mb-0">${cartTotal.toFixed(2)}</h4>
          </div>
          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              size="lg" 
              className="fw-bold rounded-pill"
              onClick={handleProceedToPayment}
            >
              Proceder al pago
            </Button>
            <Button variant="dark" size="lg" as={Link} to="/" className="fw-bold rounded-pill">Continuar comprando</Button>
            <Button variant="outline-danger" size="lg" onClick={clearCart} className="mt-3 fw-bold rounded-pill">Vaciar Carrito</Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;