import React, { useContext, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Confirmation() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    // Vacía el carrito después de que se carga la página de confirmación
    clearCart();
  }, [clearCart]);

  return (
    <Container className="my-5">
      <Card className="shadow-sm border-0 rounded-4 text-center p-5">
        <Card.Body>
          <h2 className="fw-bold text-success mb-3">¡Pago Realizado con Éxito!</h2>
          <p className="lead text-muted mb-4">
            Tu compra ha sido procesada correctamente y está en camino.
          </p>
          <Button as={Link} to="/" variant="dark" size="lg" className="fw-bold rounded-pill">
            Volver a la tienda
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Confirmation;
