import { useState } from 'react';
import AlumnoMinCard from '../AlumnoMinCard/AlumnoMinCard';
import './ResultadoBusquedaAlumnos.css';

const ResultadosBusquedaAlumnos = ({ alumnosFiltrados }) => {
    const [mostrar, setMostrar] = useState(false);

    function mostrandoAlumnos() {
        setMostrar(!mostrar);
    }

    return (
        <div className="container mt-3 busqueda-alumnos">
            <div className="border p-3">
                <h5 className="fw-bold">Resultados</h5>
                <button className="boton-filtrar" onClick={mostrandoAlumnos}>
                    {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && alumnosFiltrados.length > 0 && (
                    <AlumnoMinCard alumnos={alumnosFiltrados} />
                )}
                {mostrar && alumnosFiltrados.length === 0 && (
                   <p className="sin-alumnos">No se encontraron alumnos</p>
                )}
            </div>
        </div>
    );
};

export default ResultadosBusquedaAlumnos;