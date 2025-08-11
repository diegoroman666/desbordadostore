import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CartProvider from './context/CartProvider.jsx'; // Importamos CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);
