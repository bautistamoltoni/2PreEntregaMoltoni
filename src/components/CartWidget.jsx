import { useContext } from "react"
import cart from "../assets/carritodecompras.png"
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom"

const estilos = {
    img: {
        height: "50px",

    },
    span: {
        color: "white",
        paddingLeft: 10,
    }
}


export const CartWidget = ( ) => {

    const {cantidadEnCarrito} = useContext(CartContext);

    return (
    <>
    <NavLink className="nav-link " to="/carrito"> 
    <img src={cart} style={estilos.img} alt="carrito" />

    <span style={estilos.span}>{cantidadEnCarrito()}</span>
    </NavLink>
    </>
    )
}


