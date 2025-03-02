import React from 'react';
import './AlumnoMinCard.css';
import fotoProyectos from '../../assets/img/proyectos.jpg';
import banderaESP from '../../assets/logos/banderaESP.svg';
import banderaUK from '../../assets/logos/banderaUK.svg';
import banderaFR from '../../assets/logos/banderaFR.svg';

const AlumnoMinCard = ({ alumnos = [] }) => {

    function mostrarIdiomas(alumnos) {
        return alumnos.map((alumno) => 
            alumno.idiomas.map((idioma) => ({
                nombre: idioma.nombre,
                nivel: idioma.nivel
            }))
        );
    }

    function mostrarProyectos(alumnos) {
        return alumnos.map((alumno) => ({
            nombre: alumno.nombre,
            id: alumno.id
        }));
    }

    function mostrarCiclos(alumnos) {
        return alumnos.map((alumno) => 
            alumno.ciclos.map((ciclo) => ({
                codCiclo: ciclo.codCiclo,
            }))
        );
    }

    function obtenerBandera(codigo){
        switch (codigo) {
            case 'es': return banderaESP;
            case 'en': return banderaUK;
            case 'fr': return banderaFR;
            default: return null;
        }
    };

    console.log(mostrarProyectos(alumnos));
    console.log(mostrarIdiomas(alumnos));
    console.log(mostrarCiclos(alumnos));

    return (
        <div className="mt-2 w-100">
            {alumnos.map((alumno) => (
                <div key={alumno.id} className="border p-3 mt-2 w-100 alumno-card">
                    <img className='imagenAlumno' src={fotoProyectos} alt="Imagen Alumno" />
                    <div className="alumno-info">
                        <h5 className="negrita">{alumno.nombre}</h5>
                        <div className="idiomas banderas">
                            {alumno.idiomas.map((idioma) => {
                                const bandera = obtenerBandera(idioma.alpha2);
                                return (
                                    <div key={idioma.alpha2} className="idioma">
                                        <div className="idioma-nombre">{idioma.nombre}</div>
                                        {bandera && <img className="bandera" src={bandera} alt={idioma.nombre} />}
                                        <div className="idioma-nivel">{idioma.nivel}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <p className='negrita'>Ciclos: {alumno.ciclos.map((ciclo) => ciclo.codCiclo).join(' | ')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AlumnoMinCard;