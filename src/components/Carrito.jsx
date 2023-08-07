import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Carrito = ( ) => {


    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
    <div>
        

        {
            carrito.map((p) => (
                <div key={p.id}>
                    <h3>{p.nombre}</h3>
                    <p>Precio: {p.precio}</p>
                    <p>Precio total: {p.precio * p.cantidad}</p>
                    <p>Cant: {p.cantidad}</p>

                </div>
            ))
}
        {carrito.length > 0 ?
        <>
        <h2>Precio Total Compra: $ {precioTotal()}</h2> 
        <button onClick={handleVaciar}> Vaciar Carrito</button>
        </> : <h2> El Carro esta vacio</h2>
        }
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
    
    )
}

export default Carrito