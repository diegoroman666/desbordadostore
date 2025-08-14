import React, { useState, useContext } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

export default function Confirmation() {
  const [step, setStep] = useState('form'); // 'form', 'transfer_details', 'payment_success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const { clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // En la vida real, aquí se enviarían los datos al servidor para generar el pedido.
    // Nosotros, para esta simulación, pasamos al siguiente paso.
    setStep('transfer_details');
  };

  const handleConfirmPayment = () => {
    // Simulamos que el pago se procesa.
    // En un proyecto real, esto sería una respuesta del backend.
    clearCart(); // Vaciamos el carrito solo cuando el pago es exitoso
    setStep('payment_success');
  };

  const renderContent = () => {
    switch (step) {
      case 'form':
        return (
          <>
            <h2 className="fw-bold mb-3 text-center">Datos para la Transferencia</h2>
            <p className="text-muted text-center mb-4">
              Por favor, completa tus datos para recibir la información de pago y completar tu pedido.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Ingresa tu nombre" 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Ingresa tu correo" 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dirección de envío</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  placeholder="Ingresa tu dirección" 
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Ingresa tu número de teléfono" 
                  required 
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-4">
                <Button variant="dark" size="lg" type="submit" className="fw-bold rounded-pill">
                  Confirmar Datos
                </Button>
                <Button as={Link} to="/carrito" variant="outline-dark" size="lg" className="fw-bold rounded-pill">
                  ← Volver al carrito
                </Button>
              </div>
            </Form>
          </>
        );
      case 'transfer_details':
        return (
          <>
            <h2 className="fw-bold mb-3 text-center text-primary">Información de Transferencia</h2>
            <p className="text-muted text-center mb-4">
              Por favor, realiza la transferencia con los siguientes datos y luego confirma.
            </p>
            <div className="p-3 bg-light rounded-3 mb-4">
              <p className="mb-1"><strong>Nombre:</strong> {formData.name}</p>
              <p className="mb-1"><strong>Banco:</strong> Banco de Chile</p>
              <p className="mb-1"><strong>Número de cuenta:</strong> 123456789</p>
              <p className="mb-1"><strong>Tipo de cuenta:</strong> Cuenta Corriente</p>
              <p className="mb-1"><strong>RUT:</strong> 12.345.678-9</p>
              <p className="mb-0"><strong>Monto a pagar:</strong> <strong className="text-primary">${(formData.total || 0).toFixed(2)}</strong></p>
            </div>
            <div className="d-grid gap-2 mt-4">
              <Button variant="success" size="lg" onClick={handleConfirmPayment} className="fw-bold rounded-pill">
                Ya realicé el pago
              </Button>
              <Button as={Link} to="/" variant="outline-dark" size="lg" className="fw-bold rounded-pill">
                Volver a la tienda
              </Button>
            </div>
          </>
        );
      case 'payment_success':
        return (
          <>
            <h2 className="fw-bold text-success mb-3">¡Pago Realizado con Éxito!</h2>
            <p className="lead text-muted mb-4">
              Tu compra ha sido procesada y está en camino. Se ha enviado un voucher a tu correo electrónico.
            </p>
            <div className="d-grid gap-2">
              <Button as={Link} to="/" variant="dark" size="lg" className="fw-bold rounded-pill">
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
      
      {/* Recuadro de alerta sobre el backend */}
      {step !== 'payment_success' && (
        <Alert variant="warning" className="mt-4 rounded-4 shadow-sm p-4">
          <p className="mb-0">
            <strong>Nota importante:</strong> En una aplicación real, la confirmación de pago no es instantánea.
            El proceso requiere un sistema en el *backend* que se comunique con el banco o la pasarela de pago.
            Una vez que el *backend* recibe la confirmación exitosa, actualiza el estado del pedido y el *frontend*
            (esta interfaz) se sincroniza para mostrar el mensaje de éxito y vaciar el carrito.
          </p>
        </Alert>
      )}
    </Container>
  );
}