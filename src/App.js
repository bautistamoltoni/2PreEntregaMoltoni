
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import  ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import  Nosotros  from "./components/Nosotros.jsx";
import Contacto from "./components/contacto.jsx";
import Carrito from "./components/Carrito.jsx"
import Checkout from "./components/Checkout.jsx"
import  "./Css/App.Css";

import {  CartProvider } from './context/CartContext.jsx';








function App() {


  

  return (
    <>
  <CartProvider >
    <BrowserRouter>     
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="PRODUCTOS" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="PRODUCTOS" />} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/nosotros" element={ <Nosotros/>} />
            <Route path="/contacto" element={ <Contacto/>} />
            <Route path="/carrito" element={ <Carrito/>} />
            <Route path="/checkout" element={ <Checkout/>} />
        </Routes>

          
    </BrowserRouter>
    </CartProvider>
    </>
  );
    
}

  





export default App;
