/*-------------------------------------------------------------------------------
Como javascript base/puro/nativo trabaja todo de manera sincrónica (lineal),
este código se produce de manera lineal
-------------------------------------------------------------------------------*/
// console.log('Inicio llamada API');
// console.log(getCountries());
// console.log('Fin llamada API');



/*-------------------------------------------------------------------------------
En este caso, javascript nativo imprime de manera lineal los restulados, al ser
"getCountriesAsync()" una función que tiene un elemento asincrónico (settimeout)
y estar haciendo nosotros desde aquí un console.log de su función (y por ende
de su return, es decir, pedir el return de un elemento que todavía no se terminó de
ejecutar), nos devuelve undefined. Asimismo, dentro de dicha función hay un
console.log después del settimeout, y este sí se devuelve, pero antes del
settimeout, ya que la función interpreta que hay un tiempo de espera, por lo que
sigue con el procesamiento lineal del código, aunque al ser llamado de forma
inmediata desde el index, se devuelve el undefined del return que no se termina
de ejecutar.
-------------------------------------------------------------------------------*/
// console.log('Inicio llamada API async');
// console.log(getCountriesAsync());
// console.log('Fin llamada API async');



/*-------------------------------------------------------------------------------
Las llamadas del console.log comunes, son secuenciales sincrónicas, sin embargo,
a "getCountriesPromise()", le es asignado el método ".then()", que me la convierte
en una función asincrónica. Esto quiere decir algo como: "cuando se termine de
ejecutar getCountriesPromise(), devolveme su resultado". Por lo que primero se
imprimen por consola los dos console log y por último el resultado de la función.
Gracias al promise y al ".then()", podemos esperarlo como si fuera una API
-------------------------------------------------------------------------------*/
// console.log('Inicio llamada API');
// getCountriesPromise.then(() => {
//     console.log('Fin ejecución API');
// })
// console.log('Fin llamada API');



/*-------------------------------------------------------------------------------
Así como en el ".addEventListener()" podemos obtener información acerca del evento,
en la promesa, podemos obtener información sobre la promesa que estamos haciendo.
Este nos va a devolver un objeto. En este caso contiene la información que arme
(lista) y contiene otro objeto con más información propia de la promesa. Si
quisiéramos solamente obtener la lista, bastaría con poner "response.list"
Además, sabemos que las funcionalidades como alert(), confirm() y prompy(), frenan
el cargado de la página para su ejecución, sin embargo, si lo colocamos dentro de
un ".then()", los mismos se van a ejecutar una vez se termine de cargar la función,
pero antes de lo siguiente que esté dentro de dicha función. Dentro del ".then()",
es sincrónico.
-------------------------------------------------------------------------------*/
/*Estos ejemplos sirven para simular llamados a la API, ya que cuando las toquemos,
vamos a tener que decirle a JS que espere a que se complete el llamado (utilizando
fetch()), antes de hacer cualquier cosa. En este caso "getCountriesPromise()",
reemplaza el fetch()*/
// console.log('Inicio llamada API');
// getCountriesPromise.then((response) => {
//     console.log('Fin ejecución API');
//     console.log(response);
//     alert(response.list.length)
//     console.log(response.list);
// })
// console.log('Fin llamada API');



/*-------------------------------------------------------------------------------
Un ejemplo devolviendo un objeto
-------------------------------------------------------------------------------*/
// getUserPromise.then((response) => {
//     console.log(response.user)
//     console.log(response.user.address);
// })



/*-------------------------------------------------------------------------------
Al estar trabajando con llamadas a la API, es importante el asincronismo, ya que
no sabemos cuánto pueden tardar en llegar nuestras peticiones. Asimismo, no sabemos
cuándo pudimos haber ingresado mal algún valor o cuándo la API pudo tener algún
tipo de error en su devolución, por lo que es importante también capturar los
errores, para eso están el "reject()" y el ".catch()"
-------------------------------------------------------------------------------*/
// getCountriesPromiseFail.then((response) => {
//     console.log('Llamado OK');
// }).catch((error) => {
//     console.log(error);
// })



//Mesa: renderizar en el HTML los arrays que trae de getCountries y getCountriesPromise y observar las diferencias
//Mostrar un alert con el tiempo que tardó el 'llamado a la API'

//ACTIVIDAD
let getCountriesBtn = document.querySelector('.getCountries')
let ulCountries = document.querySelector('.getCountriesList')
getCountriesBtn.addEventListener('click', () => {
    ulCountries.innerHTML = ''
    let start = new Date()
    let arrayGetCountries = getCountries()
    arrayGetCountries.forEach(country=> {
        ulCountries.innerHTML += '<li>' + country + '</li>'
    })
    let ended = new Date()
    alert('El llamado a la "API", demoró: ' + (ended - start) + ' milisegundos en completarse.')
})


let getCountriesPromiseBtn = document.querySelector('.getCountriesPromise')
let ulCountriesPromise = document.querySelector('.getCountriesPromiseList')
getCountriesPromiseBtn.addEventListener('click', () => {
    ulCountriesPromise.innerHTML = ''
    let start = new Date()
    getCountriesPromise.then((response) => {
        response.list.forEach(country => {
            ulCountriesPromise.innerHTML += '<li>' + country + '</li>'
        })
        let endedPromise = new Date()
        alert('El llamado a la "API(promesa)", demoró: ' + (endedPromise - start) + ' milisegundos en completarse.')
    })
    let ended = new Date()
    alert('El llamado a la función sin la promesa, demoró: ' + (ended - start) + ' milisegundos en completarse.')
})