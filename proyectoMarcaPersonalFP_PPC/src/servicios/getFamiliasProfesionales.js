export async function getFamiliasProfesionales() {
    const fetchFamiliasProfesionales = `http://marcapersonalfp.test/api/v1/familias_profesionales/`;

    const familiasProfesionalesResponse =  await fetch(fetchFamiliasProfesionales)
        .then(response => response.json());

    // Suponiendo que familiasProfesionalesResponse es un array de objetos
    const listaFamiliasProfesionales = familiasProfesionalesResponse.map(familia => ({
        nombre: familia.nombre,
        id: familia.id
    }));

    return {
        listaFamiliasProfesionales
    };
}