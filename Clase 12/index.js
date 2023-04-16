//Normalizing example
function normalizeDemo(text) {
    text = removeEmptySpaces(text);
    text = setToLowerCase(text);
    text = setFirstLetterToUpperCase(text);
    text = removeEmptySpacesBetween(text);
    text = setFirstWordToUpperCase(text);
    console.log(text);
}

function removeEmptySpaces(text) {
    return text.trim();
}

function setToLowerCase(text) {
    return text.toLowerCase();
}

function setFirstLetterToUpperCase(text) {
    // return text.replace(text[0], text[0].toUpperCase());
    return text[0].toUpperCase() + text.slice(1);
    // text[0].toUpperCase() == E
    // text.slice(1) == sto es un texto que debemos normalizar
}

function removeEmptySpacesBetween(text) {
    return text.replaceAll(' ', '-');
}

function setFirstWordToUpperCase(text) {
    let textToReturn = '';
    let i = 0;
    let array = text.split('-');
    
    // Opción 1
    // array.forEach(word => {
        //     let separator = i < array.length - 1 ? '-' : '';
        //     textToReturn += setFirstLetterToUpperCase(word) + separator;
        //     i++;
        // });
        
        // Opción 2
        array.forEach(word => {
        array[i] = setFirstLetterToUpperCase(word);
        i++;
    });
    textToReturn = array.join('-');
    
    return textToReturn;
}

normalizeDemo('    estO es uN texto QUE debemos normalizar..    ');



//User's inputs validation
function showMessage(message) {
    let error = document.querySelector('.errors');
    if (message != '') {
        error.innerHTML = `<p>${message}</p>`;
    } else {
        error.innerHTML = '';
    }
}
let allGood = [false, false, false, false, false, false]


//Name validation (a, b, c, d allowed keys example)
let charactersAllowed = ['a', 'b', 'c', 'd'];
document.querySelector('#nombre').addEventListener('keypress', (e) => {
    //Prevents from enetering numbers:
    // if (isNaN(e.key) == false) {
    //     e.preventDefault();
    // }

    //Prevents from entering allowed characters
    if (charactersAllowed.includes(e.key) == false) {
        showMessage('Solo puedes ingresar nombres con los caracteres a, b, c y d. Además solo pueden ser minúsculas')
        e.preventDefault();
        allGood[0] = false
    } else{
        showMessage('')
        allGood[0] = true
    }
});


//Password validation. Password must have at least: one capital letter, a number and some determined symbol
let capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let allowedSymbols = ['!', '#', '$', '%', '&', '/', '(', ')', '=', ',', '.', ';', ':', '¨', '+', '-', "'"]

let password = document.querySelector('#pass')
password.addEventListener('blur', (e) =>{
    let passwordValue = password.value
    let hasCapitalLetter = false
    let hasNumbers = false
    let hasSymbols = false
    for(let index = 0; index < passwordValue.length; index++){
        capitalLetters.includes(passwordValue[index]) ? hasCapitalLetter = true : ''
        number.includes(passwordValue[index]) ? hasNumbers = true : ''
        allowedSymbols.includes(passwordValue[index]) ? hasSymbols = true : ''
    }
    if((hasCapitalLetter && hasNumbers && hasSymbols) != true ){
        showMessage('La contraseña debe incluir al menos una mayúscula, un número y alguno de los siguientes símbolos: <br>' + allowedSymbols.join(' '))
        allGood[1] = false
    } else {
        showMessage('')
        allGood[1] = true
    }
    // (hasCapitalLetter && hasNumbers && hasSymbols) != true ? showMessage('La contraseña debe incluir al menos una mayúscula, un número y alguno de los siguientes símbolos: <br>' + allowedSymbols.join(' ')) : showMessage('')
})


//Phone validation
let phone = document.querySelector('#tel')
phone.addEventListener('keypress', (e) => {
    //Prevents from enetering letters
    if (isNaN(e.key) == true) {
        e.preventDefault();
        showMessage('Solo puede incluir números')
    } else {
        showMessage('')
    }
});
phone.addEventListener('blur', (e) => {
    //Prevents from negative numbers
    if(phone.value < 0){
        showMessage('El número de teléfono no puede ser negativo')
        allGood[2] = false
    } else {
        showMessage('')
        allGood[2] = true
    }
});


//Regular expressions for email validation.
//We compare this RegEx with entered email to check they match. That's how we find out if it's a valid email
let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

let email = document.querySelector('#email');
email.addEventListener('blur', function() {
    if (regex.test(email.value) == false) {
        showMessage('El email es inválido.');
        allGood[3] = false
    } else {
        showMessage('');
        allGood[3] = true
    }
});


//Hobbies limitation/validation
let counter = 0;
let checks = document.getElementsByName('hobbies');
checks.forEach(check => {
    check.addEventListener('click', function(e) {
        if (this.checked) {
            if (counter >= 4) {
                showMessage('No se puede seleccionar mas de 4 hobbies.');
                allGood[4] = false
                e.preventDefault();
            } else {
                counter++;
                allGood[4] = true
            }
        } else {
            showMessage('');
            allGood[4] = true
            counter--;
        }
        console.log(this.checked, counter);
    });
});


//Place were born validation
let picked = false
let countries = document.getElementsByName('nacionalidad')
countries.forEach(element =>{
    element.addEventListener('click', () => {
        console.log(picked);
        element.checked ? picked = true : ''
        console.log(picked);
    })
})
document.querySelector('button').addEventListener('mouseover', () =>{
    if(picked == false){
        showMessage('Debe seleccionar al menos un país de nacimiento')
        allGood[5] = false
    } else if  (picked == true){
        showMessage('')
        allGood[5] = true
    }
})


//Full form validation when trying to submit
document.querySelector('button').addEventListener('click', (e) =>{
    if(allGood.includes(false)){
        e.preventDefault()
        alert('No se puede enviar el formulario hasta que todos los campos cumplan con los campos correctamente')
    } else {
        alert('Gracias por suscribirte')
    }
})