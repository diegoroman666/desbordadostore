// Archivo: src/pages/Confirmation.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

export default function Confirmation() {
  const [step, setStep] = useState('transfer_details'); // Primer paso: mostrar datos de transferencia
  const [orderNumber, setOrderNumber] = useState(null);

  const { clearCart } = useContext(CartContext);

  // Generar número de pedido
  useEffect(() => {
    const generateOrder = () => {
      const random = Math.floor(100000 + Math.random() * 900000);
      return `CS-${random}`;
    };
    setOrderNumber(generateOrder());
  }, []);

  const handleConfirmPayment = () => {
    clearCart(); // Vaciar carrito sólo cuando el usuario confirma
    setStep('payment_success');
  };

  const renderContent = () => {
    switch (step) {
      case 'transfer_details':
        return (
          <>
            <h2 className="fw-bold mb-3 text-center text-primary">
              Información para realizar la transferencia
            </h2>

            <p className="text-muted text-center mb-4">
              Realiza la transferencia con los siguientes datos.  
              Luego presiona <strong>"Ya realicé el pago"</strong>.
            </p>

            {/* Recuadro de datos */}
            <div className="p-3 bg-light rounded-3 mb-4">
              <p className="mb-1"><strong>Nombre del destinatario:</strong> CioroStore SpA</p>
              <p className="mb-1"><strong>Banco:</strong> Banco Estado</p>
              <p className="mb-1"><strong>Tipo de cuenta:</strong> Cuenta Rut</p>
              <p className="mb-1"><strong>Número de cuenta / RUT:</strong> 12.345.678-9</p>
              <p className="mb-1"><strong>Correo para enviar comprobante:</strong> pagos@ciorostore.cl</p>
              <p className="mb-1"><strong>Teléfono de contacto:</strong> +56 9 1234 5678</p>
            </div>

            <p className="text-center text-muted">
              Tu pedido será enviado dentro de las próximas <strong>24 horas</strong> después de recibir el comprobante.
            </p>

            <div className="d-grid gap-2 mt-4">
              <Button 
                variant="success" 
                size="lg" 
                onClick={handleConfirmPayment}
                className="fw-bold rounded-pill"
              >
                Ya realicé el pago
              </Button>

              <Button 
                as={Link}
                to="/carrito"
                variant="outline-dark"
                size="lg"
                className="fw-bold rounded-pill"
              >
                ← Volver al carrito
              </Button>
            </div>
          </>
        );

      case 'payment_success':
        return (
          <>
            <h2 className="fw-bold text-success mb-3 text-center">
              ¡Pago Confirmado!
            </h2>

            <p className="lead text-muted text-center mb-4">
              Tu pago ha sido registrado y tu pedido está en preparación.
              Lo recibirás en un plazo máximo de <strong>24 horas</strong>.
            </p>

            <h5 className="fw-bold text-center">Número de Pedido</h5>
            <div 
              className="bg-light border rounded-pill py-2 px-4 mx-auto mb-4"
              style={{ fontSize: "1.2rem", fontWeight: "600", width: "fit-content" }}
            >
              {orderNumber}
            </div>

            <p className="text-muted text-center">
              Guarda este número para cualquier consulta relacionada con tu compra.
            </p>

            <div className="d-grid gap-2 mt-4">
              <Button 
                as={Link}
                to="/"
                variant="dark"
                size="lg"
                className="fw-bold rounded-pill"
              >
                Volver a la tienda
              </Button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm border-0 rounded-4 p-4">
        <Card.Body>
          {renderContent()}
        </Card.Body>
      </Card>

      {/* Advertencia sobre backend */}
      {step !== 'payment_success' && (
        <Alert variant="warning" className="mt-4 rounded-4 shadow-sm p-4">
          <p className="mb-0">
            <strong>Nota importante:</strong> En una aplicación real,
            la confirmación del pago dependería del backend y la validación bancaria.
            Esta interfaz simula el proceso para fines demostrativos.
          </p>
        </Alert>
      )}
    </Container>
  );
}
