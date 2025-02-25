import React, { useState } from 'react';
import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";

import './ListaFamiliasProfesionales.css';

const BusquedaProyectos = () => {
    const [mostrar, setMostrar] = useState(false);
    
    const familiasProfesionales = useFamiliasProfesionales();
    function mostrandoFamilias(){
        setMostrar(!mostrar)
    }
    return (
        <div className="container mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Búsqueda de Proyectos</h5>
                <button className="boton-filtrar" onClick={mostrandoFamilias}>
                    Filtrar por familia profesional {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && (
                    <div className="mt-2">
                        {familiasProfesionales.map((familia) => (
                            <button key={familia.id} className="botonFamilias m-1">
                                {familia.nombre}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusquedaProyectos;
