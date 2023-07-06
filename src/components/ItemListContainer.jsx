import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import data from "../data/productos.json";
import { ItemList } from "./ItemList.jsx"
import { useParams } from 'react-router-dom';


export const ItemListContainer = props  => {
    const [productos, setProductos] = useState([])

    const {id} = useParams()

    useEffect(() => { 
        const promesa = new Promise ((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 3000)
            
        })
        promesa.then(result => {
            const filteredProductos = id ? result.filter(producto => producto.category === id) : result;
            setProductos(filteredProductos);
          });
    }, [id]) 
    
    return (
    <Container>
        <h1>
            {props.greeting}
        </h1>
        {productos.length === 0 ? (<div> loading</div>) : <ItemList productos={productos} /> }  
        
        
        
    </Container>
    )
}