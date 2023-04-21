// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data)
        renderizarDatosUsuario(data)
    })
    .catch(error =>{
        console.log('Se ha producidor un error: ' + error);
    })

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let user = datos.results[0]
    
    let profilePic = user.picture.large
    let fullName = user.name.title + ' ' + user.name.first + ' ' + user.name.last
    let email = user.email

    document.querySelector('.tarjeta').innerHTML = `
    <img src="${profilePic}" alt="Foto de perfil">
    <p>${fullName}</p>
    <p>${email}</p>
    `
}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
document.querySelector('.btnContainer').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data)
        renderizarDatosUsuario(data)
        //En el caso de querer agregar y no reemplazar el usuario, simplemente deberíamos agregar '+=' al innerHTML de la función
        //Sin embargo este css no tiene contemplada esa opción
    })
    .catch(error =>{
        console.log('Se ha producidor un error: ' + error);
    })
})