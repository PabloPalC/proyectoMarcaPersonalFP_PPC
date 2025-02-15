export function getCounts() {

    const api_URL_Base = `http://marcapersonalfp.test/api/v1/`;


    const fetchEmpresas = `${api_URL_Base}empresas/count`;
    const fetchUsuarios = `${api_URL_Base}/users/count`;
    const fetchProyectos = `${api_URL_Base}/proyectos/count`;

    return fetch(fetchEmpresas)
    .then(response => response.json())
    .then(empresasResponse => {
        const countEmpresas = empresasResponse.count;
        return {
            countEmpresas,
        };
    });
    return fetch(fetchUsuarios)
    .then(response => response.json())
    .then(usuariosResponse => {
        const countUsuarios = usuariosResponse.count;
        return {
            countUsuarios,
        };
    });
        return fetch(fetchUsuarios)
            .then(response => response.json())
            .then(usuariosResponse => {
                const countUsuarios = usuariosResponse.count;
                return fetch(fetchProyectos)
                    .then(response => response.json())
                    .then(proyectosResponse => {
                        const countProyectos = proyectosResponse.count;
                        return {
                            countEmpresas,
                            countUsuarios,
                            countProyectos
                        };
                    });
            });

}

