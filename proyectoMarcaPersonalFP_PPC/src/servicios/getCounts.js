export function getCounts(tabla) {
    const apiURL = `http://marcapersonalfp.test/api/v1/${tabla}/count`;

    console.log(apiURL);

    return fetch(apiURL)
        .then(response => response.json())
        .then(response => {
            const { count } = response;
            return count; // Devolvemos el valor de count
        });
}
