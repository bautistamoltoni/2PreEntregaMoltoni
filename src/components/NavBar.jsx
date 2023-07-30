
    




import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore"; // Importa los métodos necesarios de Firebase

import {CartWidget } from "../components/CartWidget.jsx"
import { db } from "../firebase/config.js"; // Importa el objeto 'db' inicializado con Firebase

export const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Función para obtener las categorías de Firebase Firestore
    const obtenerCategorias = async () => {
      const productosRef = collection(db, "productos");
      const querySnapshot = await getDocs(productosRef);
      const categoriasUnicas = new Set();

      querySnapshot.forEach((doc) => {
        const producto = doc.data();
        categoriasUnicas.add(producto.category);
      });

      // Convierte el conjunto de categorías únicas en un array
      setCategorias([...categoriasUnicas]);
    };

    obtenerCategorias();
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink className="nav-link" to={`/`}>
            Mi Comercio
          </NavLink>
          {categorias.map((Item) => (
            <NavLink
              key={Item}
              className="nav-link"
              to={`/category/${Item}`}
            >
              {Item}
            </NavLink>
          ))}
          <NavLink className="nav-link " to={`/Nosotros`}>
            Nosotros
          </NavLink>
          <NavLink className="nav-link " to={`/Contacto`}>
            Contacto
          </NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
