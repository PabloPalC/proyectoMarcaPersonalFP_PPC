import React, { useState } from 'react';
import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import './ListaFamiliasProfesionales.css';

const ListaFamiliasProfesionales = () => {
    const [mostrar, setMostrar] = useState(false);
    const familiasProfesionales = useFamiliasProfesionales();

    function controlarBoton(){
        setMostrar(!mostrar);
    }

    return (
        <div>
            <button onClick={controlarBoton}>
                {mostrar ? 'OCULTAR FAMILIAS' : 'MOSTRAR FAMILIAS'}
            </button>
            {mostrar && (
                <div>
                    {familiasProfesionales.map((familia) => (
                        <div key={familia.id} className={'tarjeta'}>
                            <p>{familia.nombre}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListaFamiliasProfesionales;