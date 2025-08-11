import { createContext } from 'react';

// Creamos un nuevo contexto para el carrito de compras.
// createContext devuelve un objeto con dos componentes: Provider y Consumer.
// Aquí lo inicializamos con un objeto vacío para evitar errores.
const CartContext = createContext({});

export default CartContext;
