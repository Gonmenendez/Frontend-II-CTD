function getCountriesAsync(callback){
    setTimeout(() => {
        return [
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
    }, 1500);
    console.log('Esto va antes');
}