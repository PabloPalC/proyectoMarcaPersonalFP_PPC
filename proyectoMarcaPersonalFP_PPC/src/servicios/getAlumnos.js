export async function getAlumnos() {
    const fetchAlumnos = `http://marcapersonalfp.test/api/v1/users/`;

    const alumnosResponse =  await fetch(fetchAlumnos)
        .then(response => response.json());

    // Suponiendo que familiasProfesionalesResponse es un array de objetos
    const listaAlumnos = alumnosResponse.map(alumnos => ({
        nombre: alumnos.nombre,
        id: alumnos.id
    }));

    return {
        listaAlumnos
    };
}