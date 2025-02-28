import { useEffect, useState } from "react";
import useProyectos from "./useProyectos";

const useProyectosFiltrados = () => {
    const proyectos = useProyectos();
    const [listaProyectos, setListaProyectos] = useState([]);
    const [listaProyectosFiltrada, setListaProyectosFiltrada] = useState([]);

    function crearListaFiltrada() {
        if (proyectos) {
            setListaProyectos(proyectos);
            setListaProyectosFiltrada(proyectos);
        }
    }

    function filtrarLista(familiasId = []) {
        if (!listaProyectos) return;

        if (familiasId.length === 0) {
            setListaProyectosFiltrada([]);
        } else {
            const proyectosFiltradosArray = [];

            listaProyectos.forEach((proyecto) => {
                if (proyecto.ciclos && proyecto.ciclos.length > 0) {
                    for (let i = 0; i < familiasId.length; i++) {
                        for (let n = 0; n < proyecto.ciclos.length; n++) {
                            if (proyecto.ciclos[n].familia_id === familiasId[i]) {
                                if (!proyectosFiltradosArray.includes(proyecto)) {
                                    proyectosFiltradosArray.push(proyecto);
                                }
                            }
                        }
                    }
                }
            });

            setListaProyectosFiltrada(proyectosFiltradosArray);
        }
    }

    useEffect(crearListaFiltrada, [proyectos]);

    return { listaProyectosFiltrada, filtrarLista };
};

export default useProyectosFiltrados;