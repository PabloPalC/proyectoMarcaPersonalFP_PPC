import React, { useState } from 'react';
import useProyectosFiltrados from "../../hooks/useProyectosFiltrados";
import ResultadosBusquedaProyectos from '../../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';
import ListaFamiliasProfesionales from '../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import './BusquedaProyectos.css';

const BusquedaProyectos = () => {
    const [mostrar, setMostrar] = useState(false);
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);
    
    const { listaProyectosFiltrada, filtrarLista } = useProyectosFiltrados();

    function mostrandoFamilias() {
        setMostrar(!mostrar);
    }

    function toggleFamiliaSeleccionada(familiaId) {
        const nuevasFamiliasSeleccionadas = familiasSeleccionadas.includes(familiaId)
            ? familiasSeleccionadas.filter(id => id !== familiaId)
            : [...familiasSeleccionadas, familiaId];
        
        setFamiliasSeleccionadas(nuevasFamiliasSeleccionadas);
        filtrarLista(nuevasFamiliasSeleccionadas);
    }

    return (
        <div className="container-fluid mt-3 busqueda-proyectos w-100">
            <div className="border p-3 w-100">
                <h5 className="fw-bold">Búsqueda de Proyectos</h5>
                <button className="boton-filtrar" onClick={mostrandoFamilias}>
                    Filtrar por familia profesional {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && (
                    <ListaFamiliasProfesionales
                        familiasSeleccionadas={familiasSeleccionadas}
                        toggleFamiliaSeleccionada={toggleFamiliaSeleccionada}
                    />
                )}
            </div>
            <ResultadosBusquedaProyectos proyectosFiltrados={listaProyectosFiltrada} />
        </div>
    );
};

export default BusquedaProyectos;