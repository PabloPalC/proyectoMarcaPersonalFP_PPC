import React from 'react';
import fotoProyectos from '../../assets/img/proyectos.jpg';
import './AlumnoMinCard.css';
const AlumnoMinCard = ({ alumnos = [] }) => {
    return (
        <div className="mt-2">
            {alumnos.map((alumno) => (
                <div key={alumno.id} className="border p-3 mt-2">
                    <img className='imagenAlumno' src={fotoProyectos} alt="Imagen Alumno" />
                    <p className="negrita">{alumno.nombre}</p>
                    <p className='negrita'>ID: {alumno.id}</p>
                </div>
            ))}
        </div>
    );
};

export default AlumnoMinCard;