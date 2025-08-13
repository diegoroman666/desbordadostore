// Archivo: src/pages/Confirmation.jsx
// Esta página ahora muestra el formulario de datos para la transferencia
import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de envío recibidos. A continuación se mostrarán los datos para la transferencia bancaria.');
    // Aquí puedes agregar la lógica para mostrar los datos de transferencia.
    // Por ahora, solo usamos un console.log.
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm border-0 rounded-4 p-4">
        <Card.Body>
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
        </Card.Body>
      </Card>
    </Container>
  );
}
