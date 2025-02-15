export async function getCounts() {

    const api_URL_Base = `http://marcapersonalfp.test/api/v1/`;

    const fetchEmpresas = `${api_URL_Base}empresas/count`;
    const fetchUsuarios = `${api_URL_Base}users/count`;
    const fetchProyectos = `${api_URL_Base}proyectos/count`;

    const empresasResponse = 
        await fetch(fetchEmpresas).then // El await se asegura de que se ha extraido el dato,
                                            //  despues completa la promesa y lo almacena
            (response => response.json());
    const countEmpresas = empresasResponse.count; // Aqui accedemos al valor de count que es el que devolvemos 
                                                    // para usarlo en el hook posteriormente.

    const usuariosResponse = 
        await fetch(fetchUsuarios).then
            (response => response.json());
    const countUsuarios = usuariosResponse.count;

    const proyectosResponse = 
        await fetch(fetchProyectos).then
            (response => response.json());
    const countProyectos = proyectosResponse.count;

    return {    // Es el conteo de cada servicio que luego recuperamos en el hook.
        countEmpresas,
        countUsuarios,
        countProyectos
    };
}

