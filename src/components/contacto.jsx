import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const handleFinalizarCompra = () => {
        if (nombre && email) {
            navigate("/checkout");
        } 
    };

    return (
        <div>
            <h1>Formulario de Contacto</h1>

            <h3>Ingrese sus datos</h3>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button onClick={handleFinalizarCompra} disabled={!nombre || !email}>
                Finalizar Compra
            </button>
        </div>
    );
};

export default Contacto;







