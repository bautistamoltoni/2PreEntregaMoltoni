
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import { ItemList } from "./ItemList.jsx"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContainer = props  => {
    const [productos, setProductos] = useState([])

    const  {category } = useParams();

    

    useEffect(() => { 

        const productosRef = collection(db, "productos");
        const q = category ? query(productosRef, where("category", "===", category)) : productosRef;

        getDocs(q).then(
            (resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id : doc.id}
                    })
                )
            }
        )
        

    }, [category]) 
    






    return (
    <Container>
        <h1>
            {props.greeting}
        </h1>

        {productos.length === 0 ? (<div> loading</div>) : <ItemList productos={productos} /> }  
        
        


        
    </Container>
    )
}