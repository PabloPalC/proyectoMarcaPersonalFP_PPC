export function getCounts() {

    const api_URL_Base = `http://marcapersonalfp.test/api/v1/`;


    const fetchEmpresas = `${api_URL_Base}empresas/count`;
    const fetchUsuarios = `${api_URL_Base}/users/count`;
    const fetchProyectos = `${api_URL_Base}/proyectos/count`;

    return fetch(fetchEmpresas)
        .then(response => response.json())
        .then(response => {
            const { countEmpresas } = response;
            return countEmpresas; // Devolvemos el valor de count
        });

}
