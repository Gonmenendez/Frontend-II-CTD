let getCountriesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let list =[
            "Argentina",
            "Chile",
            "Uruguay",
            "Brasil",
            "Venezuela",
            "Colombia",
            "Paraguay",
            "Bolivia",
            "Ecuador",
            "Perú"
        ];
        resolve({list})
    }, 2500);
})

let getUserPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let user = {
            name: 'Gonzalo',
            age: '22',
            address: 'Resistencia',
            country: 'Argentina'
        };
        resolve({user})
    }, 2500);
})

let getCountriesPromiseFail = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let list =[
            "Argentina",
            "Chile",
            "Uruguay",
            "Brasil",
            "Venezuela",
            "Colombia",
            "Paraguay",
            "Bolivia",
            "Ecuador",
            "Perú"
        ];
        reject('Error en el parámetro')
    }, 2500);
})