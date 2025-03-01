import React, { useState } from 'react';
import ResultadosBusquedaAlumnos from '../../componentes/ResultadoBusquedaAlumnos/ResultadoBusquedaAlumnos';
import '../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales.css';
import useAlumnosFiltrados from '../../hooks/useAlumnosFiltrados';
import ListaPerfilesCompetenciales from '../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales';
import ListaFamiliasProfesionales from '../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales';

const BusquedaAlumnos = () => {
    const { listaAlumnosFiltrada, filtrarLista } = useAlumnosFiltrados();
    const [mostrarPerfiles, setMostrarPerfiles] = useState(false);
    const [mostrarFamilias, setMostrarFamilias] = useState(false);
    const [perfilesSeleccionados, setPerfilesSeleccionados] = useState([]);
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);

    function mostrandoPerfiles() {
        setMostrarPerfiles(!mostrarPerfiles);
    }

    function mostrandoFamilias() {
        setMostrarFamilias(!mostrarFamilias);
    }

    function togglePerfilSeleccionado(perfilId) {
        const nuevosPerfilesSeleccionados = perfilesSeleccionados.includes(perfilId)
            ? perfilesSeleccionados.filter(id => id !== perfilId)
            : [...perfilesSeleccionados, perfilId];
        
        setPerfilesSeleccionados(nuevosPerfilesSeleccionados);
        filtrarLista(nuevosPerfilesSeleccionados);
    }

    function toggleFamiliaSeleccionada(familiaId) {
        const nuevasFamiliasSeleccionadas = familiasSeleccionadas.includes(familiaId)
            ? familiasSeleccionadas.filter(id => id !== familiaId)
            : [...familiasSeleccionadas, familiaId];
        
        setFamiliasSeleccionadas(nuevasFamiliasSeleccionadas);
        filtrarLista(nuevasFamiliasSeleccionadas);
    }

    return (
        <div className="container mt-3 busqueda-alumnos">
            <div className="border p-3">
                <h5 className="fw-bold">Búsqueda de Alumnos</h5>
                <button className="boton-filtrar" onClick={mostrandoPerfiles}>
                    Filtrar por perfil competencial {mostrarPerfiles ? '▲' : '▼'}
                </button>
                {mostrarPerfiles && (
                    <ListaPerfilesCompetenciales
                        perfilesSeleccionados={perfilesSeleccionados}
                        togglePerfilSeleccionado={togglePerfilSeleccionado}
                    />
                )}
                <button className="boton-filtrar" onClick={mostrandoFamilias}>
                    Filtrar por familia profesional {mostrarFamilias ? '▲' : '▼'}
                </button>
                {mostrarFamilias && (
                    <ListaFamiliasProfesionales
                        familiasSeleccionadas={familiasSeleccionadas}
                        toggleFamiliaSeleccionada={toggleFamiliaSeleccionada}
                    />
                )}
            </div>
            <ResultadosBusquedaAlumnos alumnosFiltrados={listaAlumnosFiltrada} />
        </div>
    );
};

export default BusquedaAlumnos;