import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {    
    const [listaProyectos, setListaProyectos] = useState([]);
       
    function obtenerProyectos() {
        getProyectos().then(data => {
            setListaProyectos(data.listaProyectos);
        });
    }

    useEffect(obtenerProyectos, []);

    return listaProyectos;
}

export default useProyectos;