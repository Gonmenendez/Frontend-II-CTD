//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
document.querySelector('#tarjeta').setAttribute("class", "card")

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
document.querySelector('#logo').setAttribute('src', 'https://www.youtube.com/img/desktop/yt_1200.png')

//3- Quitarle al titulo la clase que le está dando un formato feo
document.querySelector('h1').removeAttribute('class')

//4- Chequear si el link a youtube posee o no el atributo href
let hasHref = document.querySelector('#link_youtube').hasAttribute('href')
console.log(hasHref);

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let getHref = document.querySelector('#link_wikipedia').getAttribute('href')
console.log(getHref);
