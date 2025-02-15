import { useEffect, useState } from "react";
import { getCounts } from "../servicios/getCounts";

const useCounts = () =>  {    

    // Estado con la lista de counts que recuperamos de la REST API.
    const [counts, setCounts] = useState({
        empresas: 0,
        usuarios: 0,
        proyectos: 0
    });
       
    function obtenerDatos() {
        getCounts().then(data => {
            setCounts({
                empresas: data.countEmpresas,
                usuarios: data.countUsuarios,
                proyectos: data.countProyectos
            });
        });
    }

    // Llamamos a la función de coger los datos con un useEffect para que solo se ejecute una vez.
    useEffect(() => {obtenerDatos()}, []);

    return counts;
}

export default useCounts;
