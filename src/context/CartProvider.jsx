import { useState } from 'react';
import CartContext from './CartContext';

// Este es el componente que proveerá el contexto.
// Todo lo que esté dentro de este componente tendrá acceso al estado del carrito.
function CartProvider({ children }) {
    // Usamos useState para manejar el estado del carrito.
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito.
    const addItem = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    // Función para eliminar un producto del carrito.
    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    // El valor que se pasará a todos los componentes que usen este contexto.
    const contextValue = {
        cart,
        addItem,
        removeItem,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
