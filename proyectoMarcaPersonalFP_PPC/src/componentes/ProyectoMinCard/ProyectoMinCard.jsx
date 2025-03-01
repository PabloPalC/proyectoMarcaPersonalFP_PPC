import React from 'react';
import './ProyectoMinCard.css';
import fotoProyectos from '../../assets/img/proyectos.jpg';
const ProyectoMinCard = ({ proyectos = [] }) => {

    function mostrarCiclos(proyectos) {
        return proyectos.map((proyecto) => 
            proyecto.ciclos.map((ciclo) => ({
                nombre: ciclo.nombre,
                codCiclo: ciclo.codCiclo
            }))
        );
    }
   
    function mostrarProyectos(proyectos) {
        return proyectos.map((proyecto) => ({
            nombre: proyecto.nombre,
            docenteID: proyecto.docente_id
        }));
    }

    function mostrarParticipantes(proyectos) {
        return proyectos.map((proyecto) => 
            proyecto.participantes.map((participante) => ({
                nombre: participante.nombre,
            }))
        );
    }

     console.log(mostrarProyectos(proyectos));
     console.log(mostrarCiclos(proyectos));
     console.log(mostrarParticipantes(proyectos));

     // Ahora toca devolver el boton con los datos necesarios para devolver todo.
    return (
        <div className="mt-2">    
            {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="border p-3 mt-2">
                    <img className='imagenProyecto' src={fotoProyectos} alt="Imagen Proyectos" />
                    <h5 className="negrita">{proyecto.nombre}</h5>
                    <p className='negrita'>ALUMNOS: {proyecto.participantes.map((participante) => participante.nombre).join(', ')}</p>
                    <p className='negrita'>Tutor: {proyecto.docente_id}</p>
                    <p className='negrita subrayado'>Ciclos: {proyecto.ciclos.map((ciclo) => ciclo.codCiclo).join(' | ')}</p>
                </div>
            ))}
        </div>
    );
};

export default ProyectoMinCard;