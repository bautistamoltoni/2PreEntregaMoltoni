import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import {doc, getDoc} from "firebase/firestore";
import { db } from '../firebase/config';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
  
    useEffect(() => {

      const docRef = doc( db, "productos", id);
      getDoc(docRef).then(
        ( resp) => {
          setItem(
            {...resp.data(), id : resp.id}
          )
        }
      )





      // const promesa = new Promise((resolve, rejected) => {
      //   resolve(data);
      // });
  
      // promesa.then(result => {
      //   const filteredItem = id ? result.find(producto => producto.id === Number(id)) : null;
      //   setItem(filteredItem || {});
      // });
    }, [id]);
  
    return <ItemDetail item={item} />;
  };
  




export default ItemDetailContainer;



