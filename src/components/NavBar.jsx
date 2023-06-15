import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget.jsx";

export const NavBar = () => { 
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Mi Comercio</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
    </Navbar>
    )
    }
    



