// Archivo: src/context/CartProvider.jsx
// Este archivo está correcto y no necesita cambios. Solo se muestra para referencia.
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
  
  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;