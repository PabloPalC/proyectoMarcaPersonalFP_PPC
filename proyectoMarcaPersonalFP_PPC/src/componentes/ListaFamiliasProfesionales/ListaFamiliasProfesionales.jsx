import React from 'react';
import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import './ListaFamiliasProfesionales.css';

const ListaFamiliasProfesionales = ({ familiasSeleccionadas, toggleFamiliaSeleccionada }) => {
    const familiasProfesionales = useFamiliasProfesionales();

    return (
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
    );
};

export default ListaFamiliasProfesionales;