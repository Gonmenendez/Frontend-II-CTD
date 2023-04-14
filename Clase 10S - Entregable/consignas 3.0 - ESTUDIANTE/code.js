/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresá tu nombre')
  datosPersona.edad = (new Date).getFullYear() - prompt('Ingresa el año en que naciste')
  datosPersona.ciudad = prompt('Ingresa la ciudad en dónde vives')
  datosPersona.interesPorJs = confirm('¿Te interesa JavaScript?') ? 'Si' : 'No'
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.createTextNode(datosPersona.nombre)
  let edad = document.createTextNode(datosPersona.edad)
  let ciudad = document.createTextNode(datosPersona.ciudad)
  let js = document.createTextNode(datosPersona.interesPorJs)
  document.querySelector('#nombre').appendChild(nombre)
  document.querySelector('#edad').appendChild(edad)
  document.querySelector('#ciudad').appendChild(ciudad)
  document.querySelector('#javascript').appendChild(js)
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  for(let item of listado){
    const templateLista = 
    `
      <div class="caja">
        <img src="${item.imgUrl}" alt="${item.lenguajes}">
        <p class="lenguajes">${item.lenguajes}</p>
        <p class="bimestre">${item.bimestre}</p>
      </div>
    `
    document.querySelector('#fila').innerHTML += templateLista
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector('#sitio').classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keypress', (e) => {
  (e.key == 'f' || e.key == 'F') ? document.querySelector('#sobre-mi').classList.remove('oculto') : ''
})