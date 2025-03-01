import { useEffect, useState } from "react";
import useAlumnos from "./useAlumnos";

const useAlumnosFiltrados = () => {
    const alumnos = useAlumnos();
    const [listaAlumnos, setListaAlumnos] = useState([]);
    const [listaAlumnosFiltrada, setListaAlumnosFiltrada] = useState([]);

    function crearListaFiltrada() {
        if (alumnos) {
            setListaAlumnos(alumnos);
            setListaAlumnosFiltrada(alumnos);
        }
    }

    function filtrarLista(familiasId = []) {
        if (!listaAlumnos) return;

        if (familiasId.length === 0) {
            setListaAlumnosFiltrada([]);
        } else {
            const alumnosFiltradosArray = [];

            listaAlumnos.forEach((alumno) => {
                if (alumno.ciclos && alumno.ciclos.length > 0) {
                    for (let i = 0; i < familiasId.length; i++) {
                        for (let n = 0; n < alumno.ciclos.length; n++) {
                            if (alumno.ciclos[n].familia_id === familiasId[i]) {
                                if (!alumnosFiltradosArray.includes(alumno)) {
                                    alumnosFiltradosArray.push(alumno);
                                }
                            }
                        }
                    }
                }
            });

            setListaAlumnosFiltrada(alumnosFiltradosArray);
        }
    }

    useEffect(crearListaFiltrada, [alumnos]);

    return { listaAlumnosFiltrada, filtrarLista };
};

export default useAlumnosFiltrados;