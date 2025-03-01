import { useEffect, useState } from "react";
import { getCompetencias } from "../servicios/getCompetencias";

const useCompetencias = () => {    
    const [listaCompetencias, setListaCompetencias] = useState([]);
       
    function obtenerCompetencias() {
        getCompetencias().then(data => {
            setListaCompetencias(data.listaCompetencias);
        });
    }

    useEffect(obtenerCompetencias, []);

    return listaCompetencias;
}

export default useCompetencias;
