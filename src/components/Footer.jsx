// Ubicación: src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Cioro Store · Sitio desarrollado por Diego Román · Derechos reservados.
        </p>
      </div>

      {/* Estilos CSS integrados para evitar errores de importación */}
      <style>
        {`
          .footer {
            background-color: #1a1a1a;
            padding: 2.5rem 1rem;
            text-align: center;
            box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);
            font-family: 'Times New Roman', serif;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          .footer-text {
            font-size: 1.3rem;
            font-weight: bold;
            margin: 0;
            letter-spacing: 1.5px;
            color: #FFD700; /* Dorado */
            text-shadow: 
              0 0 5px #FFD700,
              0 0 10px #FFD700,
              0 0 15px #FFA500,
              0 0 20px #FFA500,
              0 0 30px #FFA500;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
