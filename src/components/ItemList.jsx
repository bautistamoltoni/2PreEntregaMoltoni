import {Item } from "../components/Item.jsx"



export const ItemList = ({productos}) => {
    return (
        productos.map( producto => <Item key={producto.id} producto={producto} />) 
    )
} 