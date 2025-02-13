import { useEffect, useState } from "react";
import { getCounts } from "../servicios/getCounts";

const useCounts = (tabla) =>  {    

    // Estado con la lista de counts que recuperamos de la REST API

    const [counts, setCounts] = useState({empresas: 0,
                                          usuarios : 0,
                                          proyectos:0
                                        });
       
    function obtenerDatos() {

        setCounts ( {... counts,
                    empresas : obtenerCount("empresas")});

        setCounts ( {... counts,
                    usuarios : obtenerCount("usuarios")});

        setCounts ( {... counts,
                    proyectos : obtenerCount("proyectos")});

    }
    function obtenerCount(tabla) {
        // Usamos el servicio de obtención de counts que hemos creado
        return getCounts(tabla).then(count => {
            // Cargamos los counts en el estado del componente
            return count;
        });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    

    useEffect(() => {obtenerDatos}, []);

    return counts;
}

export default useCounts;
