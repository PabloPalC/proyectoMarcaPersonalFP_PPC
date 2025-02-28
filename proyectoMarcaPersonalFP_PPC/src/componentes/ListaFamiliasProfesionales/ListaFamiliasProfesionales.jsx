import React, { useState } from 'react';
import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import useProyectosFiltrados from "../../hooks/useProyectosFiltrados";
import ResultadosBusquedaProyectos from '../ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';
import './ListaFamiliasProfesionales.css';

const BusquedaProyectos = () => {
    const [mostrar, setMostrar] = useState(false);
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);
    
    const familiasProfesionales = useFamiliasProfesionales();
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
        <div className="container mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Búsqueda de Proyectos</h5>
                <button className="boton-filtrar" onClick={mostrandoFamilias}>
                    Filtrar por familia profesional {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && (
                    <div className="mt-2">
                        {familiasProfesionales.map((familia) => (
                            <button
                                key={familia.id}
                                className={`botonFamilias m-1 ${familiasSeleccionadas.includes(familia.id) ? 'seleccionado' : ''}`}
                                onClick={() => toggleFamiliaSeleccionada(familia.id)}
                            >
                                {familia.nombre}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <ResultadosBusquedaProyectos proyectosFiltrados={listaProyectosFiltrada} />
        </div>
    );
};

export default BusquedaProyectos;