let complete = [false, false, false, false, false, false]
//Other functions
let errors = document.querySelector('.errors')

function showError(message, type){
    let errorsTypes = document.querySelectorAll('.errors p')
    const errorTemplate =
    `
    <p class="${type}">${message}</p>
    `
    
    let found = false
    function foundType (){
        if(errorsTypes.length == 0){
            ''
        } else {
            for(let i = 0; i < errorsTypes.length; i++){
                if(errorsTypes[i].classList.contains(type)){
                    console.log(errorsTypes[i])
                    found = true
                }
            }
        }
    }

    //If 'message' == 'zero', it means i'll remove <p>
    if(message == 'zero'){
        //If there's no error <p> tags yet, function won't do anything
        if(errorsTypes.length == 0){
            ''
        //Remove error <p> tags
        } else {
            foundType()
            if(found){
                document.querySelector('.' + type).remove()
            } else {
                ''
            }
        }
    //Add error <p> tags
    } else {
        //If there's no error <p> tags
        if(errorsTypes.length == 0){
            errors.innerHTML += errorTemplate
        //If there's at least one error <p> tag
        } else {
            foundType()
            //If error <p> tag to add, already exists
            if(found){
                ''
            //If error <p> tag to add, doesn't exist yet
            } else {
                errors.innerHTML += errorTemplate
            }
        }
    }
}


//Name restrictions, normalizations and validations
//Name can't include numbers. It'll be transformed into capital letters
let nameInput = document.querySelector('#nombre')
nameInput.addEventListener('keypress', (e)=>{
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if(numbers.includes(e.key)){
        e.preventDefault()
        alert('No se permiten números')
    }
})

nameInput.addEventListener('blur', ()=>{
    if(nameInput.value.length > 0){
        showError('zero', 'nameType')
        complete[0] = true
    } else {
        showError('- El nombre no puede quedar en blanco', 'nameType')
        complete[0] = false
    }
})

let normalizedName = ''
function nameCapitalLetters(name){
    for(let i = 0; i < name.length; i++){
        normalizedName += name[i].toUpperCase()
    }
}


//Password restrictions
//Password must have at least four characters 
//Password must have at least one capital letter, a symbol AND a number
let passwordInput = document.querySelector('#pass')
let must = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['!', '#', '$', '%', '&', '/', '(', ')', '=', ',', '.', ';', ':', '¨', '+', '-', "'"]]
passwordInput.addEventListener('blur', ()=>{
    let hasAll = [false, false, false]
    for(let i = 0; i < passwordInput.value.length; i++){
        must[0].includes(passwordInput.value[i]) ? hasAll[0] = true : ''
        must[1].includes(passwordInput.value[i]) ? hasAll[1] = true : ''
        must[2].includes(passwordInput.value[i]) ? hasAll[2] = true : ''
    }
    if(hasAll.includes(false) && !passwordRestrictions()){
        showError('- La contraseña debe incluir al menos una mayúscula, un número y alguno de los siguientes símbolos: <br>' + must[2].join(' '), 'passwordType')
        showError('- La contraseña debe tener entre 5 y 10 caracteres', 'passwordTypeLength')
        complete[1] = false
    } else if (!hasAll.includes(false) && !passwordRestrictions()){
        showError('zero', 'passwordType')
        showError('- La contraseña debe tener entre 5 y 10 caracteres', 'passwordTypeLength')
        complete[1] = false

    } else if (hasAll.includes(false) && passwordRestrictions()){
        showError('- La contraseña debe incluir al menos una mayúscula, un número y alguno de los siguientes símbolos: <br>' + must[2].join(' '), 'passwordType')
        showError('zero', 'passwordTypeLength')
        complete[1] = false

    } else {
        showError('zero', 'passwordType')
        showError('zero', 'passwordTypeLength')
        complete[1] = true
    }
    setEnabled()
})

function passwordRestrictions(){
    return passwordInput.value.length <= 10 && passwordInput.value.length > 4
}


//Phone restrictions and normalizations
//Phone validation
let phoneInput = document.querySelector('#tel')
phoneInput.addEventListener('keypress', (e)=>{
    //Prevents from enetering letters
    if (isNaN(e.key) == true) {
        e.preventDefault();
        alert('El campo de número, solo puede incluir números')
    }
});
phoneInput.addEventListener('blur', ()=>{
    //Prevents from negative numbers and minimal length of 6
    console.log(phoneInput.value);
    if(phoneMinimalLength()){
        console.log('tiene mucho');
        if(phoneInput.value < 0){
            showError('- El número de teléfono no puede ser negativo', 'typePhone')
            showError('zero', 'typePhoneLength')
            complete[2] = false
        } else {
            showError('zero', 'typePhone')
            showError('zero', 'typePhoneLength')
            complete[2] = true
        }
    } else {
        showError('- El número ingresado debe tener al menos 6 caracteres', 'typePhoneLength')
        complete[2] = false
        if(phoneInput.value < 0){
            console.log('tiene poco');
            showError('- El número de teléfono no puede ser negativo', 'typePhone')
        } else {
            showError('zero', 'typePhone')
        }
    }
    setEnabled()
});

function phoneMinimalLength(){
    return phoneInput.value.length >= 6
}


//Email restrictions and validations
let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
let emailInput = document.querySelector('#email');
emailInput.addEventListener('blur', function() {
    if (regex.test(emailInput.value) == false) {
        showError('- La dirección de email que intentas ingresar es inválida.', 'typeEmail');
        complete[3] = false
    } else {
        showError('zero', 'typeEmail');
        complete[3] = true
    }
    setEnabled()
});


//Hobbies restrictions and validations
let counter = 0;
let hobbiesInput = document.getElementsByName('hobbies');
hobbiesInput.forEach(hobbie => {
    hobbie.addEventListener('click', (e)=>{
        if(hobbie.checked){
            complete[4] = true
            if(counter == 4){
                e.preventDefault()
                showError('- No se pueden seleccionar más de 4 hobbies', 'typeHobbies')
                setTimeout(() => {
                    showError('zero', 'typeHobbies')
                }, 1500);
            } else {
                showError('zero', 'typeHobbies')
                counter++
            }
        } else {
            complete[4] = true
            showError('zero', 'typeHobbies')
            counter--
        }
        hobbiesCounter()
        setEnabled()
    })
})
function hobbiesCounter(){
    counter == 0 ? complete[4] = false : ''
}


//Born place restrictions and validations
let countriesInput = document.getElementsByName('nacionalidad')

countriesInput.forEach(country =>{
    country.addEventListener('click', ()=>{
        if(country.checked){
            complete[5] = true
        }
        setEnabled()
    })
})


//Final form validation and submit
let formButton = document.querySelector('button')
function setEnabled(){
    if(!complete.includes(false)){
        nameCapitalLetters(nameInput.value)
        formButton.removeAttribute('disabled')
    } 
}

formButton.addEventListener('click', (e) =>{
    if(complete.includes(false)){
        e.preventDefault()
        formButton.setAttribute('disabled', '')
        showError('Tienes que seleccionar al menos un hobby', 'typeHobbies')
    } else {
        alert('Felicitaciones! Tu inscripción a Hogwarts está completa!')
    }
})

