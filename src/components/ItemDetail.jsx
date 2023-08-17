import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {

  const { AgregarAlCarrito} = useContext(CartContext);
  
  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = ( ) => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const stockDisponible = item.stock - cantidad;


  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>Categoría: {item.category}</Card.Text>
          <Card.Text>Stock:{stockDisponible} </Card.Text>
          <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={ () => { AgregarAlCarrito (item, cantidad)}}/>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
