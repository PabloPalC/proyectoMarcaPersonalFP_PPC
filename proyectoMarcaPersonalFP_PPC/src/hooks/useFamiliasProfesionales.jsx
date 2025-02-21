import {  useEffect, useState } from "react";
import { getFamiliasProfesionales } from "../servicios/getFamiliasProfesionales";

const useFamiliasProfesionales = () =>  {    

    // Estado con la lista de counts que recuperamos de la REST API.
    const [listaFamiliasProfesionales, setListaFamiliasProfesionales] = useState([]);
       
    function obtenerFamiliasProfesionales() {
        getFamiliasProfesionales().then(data => {
            setListaFamiliasProfesionales(data.listaFamiliasProfesionales);
        });
    }

    // Llamamos a la función de coger los datos con un useEffect para que solo se ejecute una vez.
    useEffect(obtenerFamiliasProfesionales, []);

    return listaFamiliasProfesionales;
}

export default useFamiliasProfesionales;
