
    
 import { useEffect, useState } from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import { CartWidget } from "./CartWidget.jsx";
 import { NavLink } from 'react-router-dom';
 import { collection, getDocs } from 'firebase/firestore';
 import { db } from '../firebase/config.js';
 
 export const NavBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const productosRef = collection(db, "productos");
            const querySnapshot = await getDocs(productosRef);
            const categoriasUnicas = new Set();

            querySnapshot.forEach((doc) => {
                const producto = doc.data();
                categoriasUnicas.add(producto.category);
            });

            setCategory([...categoriasUnicas]);
      };
 
        obtenerCategorias();
    }, []);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to={`/`}>Mi Comercio</NavLink>
                    {[...category].map(Item => (
                        <NavLink key={Item} className="nav-link" to={`/category/${Item}`}>
                            {Item}
                        </NavLink>
                    ))}
                    <NavLink className="nav-link" to={`/Nosotros`}>Nosotros</NavLink>
                    <NavLink className="nav-link" to={`/Contacto`}>Contacto</NavLink>
                </Nav>
                <CartWidget/>
            </Container>
      </Navbar>
    );
};
