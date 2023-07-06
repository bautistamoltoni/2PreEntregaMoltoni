import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import data from '../data/productos.json';



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      const promesa = new Promise((resolve, rejected) => {
        resolve(data);
      });
  
      promesa.then(result => {
        const filteredItem = id ? result.find(producto => producto.id === Number(id)) : null;
        setItem(filteredItem || {});
      });
    }, [id]);
  
    return <ItemDetail item={item} />;
  };
  




export default ItemDetailContainer;



