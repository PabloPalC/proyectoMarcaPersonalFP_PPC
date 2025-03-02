import React, { useState } from 'react';
import './ResultadosBusquedaProyectos.css';
import ProyectoMinCard from '../ProyectoMinCard/ProyectoMinCard';

const ResultadosBusquedaProyectos = ({ proyectosFiltrados }) => {
    const [mostrar, setMostrar] = useState(false);

    function mostrandoProyectos() {
        setMostrar(!mostrar);
    }

    return (
        <div className="container-fluid mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Resultados</h5>
                <button className="boton-filtrar" onClick={mostrandoProyectos}>
                     {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && proyectosFiltrados.length > 0 && (
                    <ProyectoMinCard proyectos={proyectosFiltrados} />
                )}
                {mostrar && proyectosFiltrados.length == 0 && (
                   <ProyectoMinCard proyectos={proyectosFiltrados} /> 
                )}
            </div>
        </div>
    );
};

export default ResultadosBusquedaProyectos;