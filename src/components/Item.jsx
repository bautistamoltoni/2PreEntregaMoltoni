import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ producto}) => {
    return (
    <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src= {producto.img} />
        <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    Categoría: {producto.category}
                </Card.Text>
                <Link to={`/item/${producto.id}`}>
                <Button variant="primary">Ver Detalles</Button>
            </Link>
        </Card.Body>
    </Card>

    )}