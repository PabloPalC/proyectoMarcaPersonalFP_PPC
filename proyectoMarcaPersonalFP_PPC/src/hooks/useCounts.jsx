import { useEffect, useState } from "react";
import { getCounts } from "../servicios/getCounts";

const useCounts = (tabla) =>  {    

    // Estado con la lista de counts que recuperamos de la REST API

    const [counts, setCounts] = useState([]);

    function obtenerCount(){

        // Usamos el servicio de obtención de counts que hemos creado

        getCounts(tabla).then(count => {

            // Cargamos los counts en el estado del componente

            setCounts(count);
        });                    
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    
    useEffect(() => {obtenerCount()}, [tabla]);

    return {counts};
}

export default useCounts;
