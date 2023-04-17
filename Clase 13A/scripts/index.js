// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
let loginBtn = document.querySelector('.login-btn')
loginBtn.addEventListener('click', (e) =>{
  toggleHidden()
  logginIn(toggleHidden)
})


// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
function logginIn(functionToHappen){
  setTimeout(()=>{
    functionToHappen()
  }, 3000)
}


// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."
function toggleHidden(){
  let loader = document.querySelector('#loader')
  loader.classList.toggle('hidden')
}


// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
let email = document.querySelector('#email-input');
let emailError = false

function showMessage(message){
  alert(message)
}

email.addEventListener('blur', function() {
    if (regex.test(email.value) == false) {
        showMessage('El email es inválido.');
        emailError = false
    } else {
        emailError = true
    }
});


// 2) Que la contraseña tenga al menos 5 caracteres.
let password = document.querySelector('#password-input')
let passwordError = false

password.addEventListener('blur', ()=>{
  if((password.value).length <= 5){
    showMessage('La contraseña debe tener al menos 5 caracteres')
    passwordError = false
  } else {
    passwordError = true
  }
})


// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"
let errorContainer = document.querySelector('#error-container')

let arrayErrors = [false, false]
loginBtn.addEventListener('click', e =>{
  errorContainer.classList.add('hidden')
  arrayErrors[0] = emailError
  arrayErrors[1] = passwordError
  //Settimeout so we wait for loggin in to disappear
  setTimeout(() => {
    if(arrayErrors.includes(false)){
      //If user's inputs are not valid, form won't send and an error will be displayed
      e.preventDefault()
      errorContainer.classList.remove('hidden')
      errorContainer.innerHTML = '<small>Alguno de los datos ingresados no cumple con los requisitos<small>'
    } else {
      exist()
      //If user's input ARE valid, we have to check if email exists in database
        if(userExists == false){
        e.preventDefault()
        errorContainer.classList.remove('hidden')
        errorContainer.innerHTML = '<small>No se han encontrado usuarios registrados con esa dirección de correo</small>'
      } else {
        //If user's input exist on database, we have to check that they belong to the same person
        userData()
        if(belongToSameUser == false){
          //If email and password don't belong to the same person
          e.preventDefault()
          errorContainer.classList.remove('hidden')
          errorContainer.innerHTML = '<small>Alguno de los datos ingresados son incorrectos</small>'
        } else {
          //If user's input belong to one person
          welcome()
        }
      }
    }
  }, 3000);
})


let userExists
let users= baseDeDatos.usuarios
let emailsDatabase = []
let passwordDatabase = []
users.forEach(element => {
  emailsDatabase.push(element.email)
  passwordDatabase.push(element.password)
})

function exist(){
  emailsDatabase.includes(email.value) ? userExists = true : userExists = false
}


let belongToSameUser
function userData(){
  let userEmailIndex = emailsDatabase.indexOf(email.value)
  let userPassIndex = passwordDatabase.indexOf(password.value)
  userEmailIndex == userPassIndex ? belongToSameUser = true : belongToSameUser = false
}


// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.
function welcome(){
  document.querySelector('form').style.display = 'none'
  document.querySelector('main').innerHTML = '<h1>Bienvenido al sitio 😀</h1>'
}


/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */