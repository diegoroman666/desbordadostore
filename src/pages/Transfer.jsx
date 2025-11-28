// Archivo: src/pages/Transfer.jsx
// Nueva versión: muestra datos bancarios para transferir

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log("El usuario confirma que realizó la transferencia.");
    navigate("/confirmacion");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold text-uppercase mb-4">
        Datos para Transferencia Bancaria
      </h2>

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
              <h4 className="fw-bold text-center mb-4">
                Información para realizar la transferencia
              </h4>

              <div className="mb-3">
                <strong>Nombre del destinatario:</strong>
                <p className="text-muted">CioroStore SpA</p>
              </div>

              <div className="mb-3">
                <strong>Teléfono de contacto:</strong>
                <p className="text-muted">+56 9 1234 5678</p>
              </div>

              <div className="mb-3">
                <strong>Correo electrónico:</strong>
                <p className="text-muted">pagos@ciorostore.cl</p>
              </div>

              <div className="mb-3">
                <strong>Banco:</strong>
                <p className="text-muted">Banco Estado</p>
              </div>

              <div className="mb-3">
                <strong>Tipo de cuenta:</strong>
                <p className="text-muted">Cuenta Rut</p>
              </div>

              <div className="mb-3">
                <strong>Número de cuenta / RUT:</strong>
                <p className="text-muted">12.345.678-9</p>
              </div>

              <hr />

              <p className="text-center mt-3">
                Una vez realizada la transferencia, tu pedido será preparado y
                entregado a domicilio en un plazo máximo de{" "}
                <strong>24 horas.</strong>
              </p>

              <Button
                variant="success"
                size="lg"
                className="fw-bold rounded-pill w-100 mt-3"
                onClick={handleConfirm}
              >
                Ya realicé la transferencia
              </Button>

              <Button
                variant="outline-dark"
                className="fw-bold rounded-pill w-100 mt-3"
                onClick={() => navigate("/carrito")}
              >
                ← Volver al carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
