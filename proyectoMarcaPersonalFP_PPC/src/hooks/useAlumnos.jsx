import { useEffect, useState } from "react";
import { getAlumnos } from "../servicios/getAlumnos";

const useAlumnos = () => {    
    const [listaAlumnos, setListaAlumnos] = useState([]);
       
    function obtenerAlumnos() {
        getAlumnos().then(data => {
            setListaAlumnos(data.listaAlumnos);
        });
    }

    useEffect(obtenerAlumnos, []);

    return listaAlumnos;
}

export default useAlumnos;
