const registerBtn = document.querySelector(".register-btn");
let userInputs = {
  email : '',
  password : '',
  adult : '',
  terms : '',
}

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  userInputs.email = document.getElementById('email-input').value
  
  // 2. Obtenemos los datos ingresados en el input de password
  userInputs.password = document.getElementById('password-input').value
  
  // 3. Obtenemos el valor del input radio
  let radioInputs = document.getElementsByName('legalAge')
  radioInputs.forEach(function(element){
    function setBoolean(){
      element.id == 'age_yes' ? userInputs.adult = true : userInputs.adult = false;
    }
    element.checked ? setBoolean() : ''
  })
  
  // 4. Obtenemos el valor del input checkbox
  userInputs.terms = document.getElementById('tyc-input').checked
  
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  userInputs.adult ? '' : alert('Deber ser mayor de edad para registrarte en el sitio')

  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  userInputs.terms ? '' : alert('Debes aceptar los TyCs para registrarte en el sitio')

  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  if(userInputs.adult == true && userInputs.terms == true){
    console.log(userInputs);
  }
});
