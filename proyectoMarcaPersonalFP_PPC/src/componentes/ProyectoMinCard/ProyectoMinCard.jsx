import React from 'react';

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
                // Aqui va el boton con los datos necesarios para devolver todo.
        </div>
    );
};

export default ProyectoMinCard;