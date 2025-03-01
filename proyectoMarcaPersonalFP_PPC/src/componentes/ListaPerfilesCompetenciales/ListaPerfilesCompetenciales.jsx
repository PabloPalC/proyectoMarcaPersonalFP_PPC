import React from 'react';
import useCompetencias from "../../hooks/useCompetencias";
import '../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales.css';

const ListaPerfilesCompetenciales = ({ perfilesSeleccionados, togglePerfilSeleccionado }) => {
    const competencias = useCompetencias();

    return (
        <div className="mt-2">
            {competencias.map((competencia) => (
                <button
                    key={competencia.id}
                    className={`botonFamilias m-1 ${perfilesSeleccionados.includes(competencia.id) ? 'seleccionado' : ''}`}
                    onClick={() => togglePerfilSeleccionado(competencia.id)}
                >
                    {competencia.nombre}
                </button>
            ))}
        </div>
    );
};

export default ListaPerfilesCompetenciales;