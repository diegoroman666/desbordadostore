// Archivo: src/context/CartProvider.jsx
// Este componente ahora incluye la función 'clearCart'
import { useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };
  
  // Función agregada para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addItem,
    removeItem,
    clearCart, // Agregamos la función al valor del contexto
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;