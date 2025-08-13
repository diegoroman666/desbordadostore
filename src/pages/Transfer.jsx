// Archivo: src/pages/Transfer.jsx
// Este archivo redirige a la página de confirmación
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Transfer() {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    console.log(`Has seleccionado pagar con ${method}. Ahora, ingresa tus datos de envío.`);
    navigate("/confirmacion");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-uppercase mb-5">Selecciona tu método de pago</h2>
      <Row className="g-4 justify-content-center">
        <Col xs={12} md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-4 text-center">
            <Card.Body>
              <h4 className="fw-bold mb-3">Mercado Pago</h4>
              <p className="text-muted">Paga con tu cuenta de Mercado Pago, tarjeta de crédito o débito.</p>
              <Button 
                variant="primary" 
                size="lg" 
                className="fw-bold rounded-pill" 
                onClick={() => handlePayment("Mercado Pago")}
              >
                Pagar con Mercado Pago
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="shadow-sm border-0 rounded-4 p-4 text-center">
            <Card.Body>
              <h4 className="fw-bold mb-3">Banco Estado</h4>
              <p className="text-muted">Paga con la app de Banco Estado o realiza una transferencia.</p>
              <Button 
                variant="dark" 
                size="lg" 
                className="fw-bold rounded-pill" 
                onClick={() => handlePayment("Banco Estado")}
              >
                Pagar con Banco Estado
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-5">
        <Button variant="outline-dark" onClick={() => navigate("/carrito")} className="fw-bold rounded-pill">
          ← Volver al carrito
        </Button>
      </div>
    </Container>
  );
}

export default Transfer;