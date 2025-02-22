import { useEffect, useState } from "react";
import { getFamiliasProfesionales } from "../servicios/getFamiliasProfesionales";

const useFamiliasProfesionales = () => {    
    const [listaFamiliasProfesionales, setListaFamiliasProfesionales] = useState([]);
       
    function obtenerFamiliasProfesionales() {
        getFamiliasProfesionales().then(data => {
            setListaFamiliasProfesionales(data.listaFamiliasProfesionales);
        });
    }

    useEffect(obtenerFamiliasProfesionales, []);

    return listaFamiliasProfesionales;
}

export default useFamiliasProfesionales;
