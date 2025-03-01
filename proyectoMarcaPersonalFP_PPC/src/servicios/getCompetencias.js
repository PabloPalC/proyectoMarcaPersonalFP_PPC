export async function getCompetencias() {
    const fetchCompetencias = `http://marcapersonalfp.test/api/v1/competencias/`;

    const competenciasResponse =  await fetch(fetchCompetencias)
        .then(response => response.json());

    // Suponiendo que familiasProfesionalesResponse es un array de objetos
    const listaCompetencias = competenciasResponse.map(competencia => ({
        nombre: competencia.nombre,
        id: competencia.id
    }));

    return {
        listaCompetencias
    };
}