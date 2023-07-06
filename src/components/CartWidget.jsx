import cart from "../assets/carritodecompras.png"

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
    return (
    <>
    <img src={cart} style={estilos.img} alt="carrito" />
    <span style={estilos.span}>0</span>
    </>
    )
}


