export async function getProyectos() {
    const fetchProyectos = `http://marcapersonalfp.test/api/v1/proyectos/`;

    const proyectosResponse =  await fetch(fetchProyectos)
        .then(response => response.json());

    // Suponiendo que proyectoResponse es un array de objetos
    const listaProyectos = proyectosResponse.map(proyecto => ({
        nombre: proyecto.nombre,
        id: proyecto.id,
    
    }));
    return {
        listaProyectos
    };
}