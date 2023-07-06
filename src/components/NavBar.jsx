import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget.jsx";

import data from "../data/productos.json";
import { NavLink } from 'react-router-dom';


const categorias = data.map( prod => prod.category)

const unique = new Set(categorias)




export const NavBar = () => { 
    return (
    <Navbar bg="dark" variant="dark">
        <Container>

        
        <Nav className="me-auto">
            <NavLink className= "nav-link"  to={`/`}  >Mi Comercio</NavLink>
            {[...unique].map(Item => (
                <NavLink key={Item} className="nav-link" to={`/category/${Item}`}>
                    {Item}
                </NavLink>
            ))}
            <NavLink className="nav-link " to={`/Nosotros`} >Nosotros</NavLink>

        </Nav>
        <CartWidget/>
        </Container>
    </Navbar>
    )

    }

    




