
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import  ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import  Nosotros  from "./components/Nosotros.jsx";
import  "./Css/App.Css";







function App() {
  return (
    <>

    <BrowserRouter>     
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="PRODUCTOS" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="PRODUCTOS" />} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/nosotros" element={ <Nosotros/>} />
        </Routes>
          
    </BrowserRouter>

    </>
  );
    
}

  





export default App;
