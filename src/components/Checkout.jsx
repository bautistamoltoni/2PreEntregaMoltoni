import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx'; 
import { v4 as uuidv4 } from 'uuid'; 

const Checkout = () => {
    const { carrito } = useContext(CartContext);

    
    const orderId = uuidv4();

    return (
    <div>
        <h1>Gracias por comprar</h1>
        <h3>Detalles de la Compra</h3>
        
        {carrito.map((p) => (
            <p key={p.id}>
            {p.nombre}  Cantidad: {p.cantidad}
            </p>
        ))}
        
        <p>ID de la Compra: {orderId}</p>

    </div>
    );
};


export default Checkout;

