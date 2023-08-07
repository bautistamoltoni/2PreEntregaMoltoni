import {  createContext } from "react";
import { useState } from "react";



export const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const AgregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    // Verificar el stock disponible antes de agregar al carrito
    if (estaEnElCarrito) {
      const stockDisponible = item.stock - estaEnElCarrito.cantidad;
      if (cantidad > stockDisponible) {
        console.error("No hay suficiente stock disponible");
        return;
      }
      estaEnElCarrito.cantidad += cantidad;
    } else {
      if (cantidad > item.stock) {
        console.error("No hay suficiente stock disponible");
        return;
      }
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, p) => acc + p.cantidad, 0)
  };

  const precioTotal = () => {
    return carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
  }

  const vaciarCarrito = ( ) => {
    setCarrito([])
  }

  return  (
    <CartContext.Provider value={{carrito, AgregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
  )


}