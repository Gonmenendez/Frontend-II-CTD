async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);
  
  //Actividades
  
  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.
  
  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css
  
  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:
  //1.
  //Seleccionamos las imágenes que están dentro de las cards y les asignamos el atributo
  //imagen de pokemonData. Ponemos order-1, ya que necesitamos el índice del array obtenido
  //al hacer el querySelectorAll y el parámetro order nos está devolviendo el orden de
  //pokemon alterado para los alt de las img (como dice en la función de abajo, index + 1)
  let cardsImg= document.querySelectorAll('.card img')
  let i= order-1
  cardsImg[i].setAttribute('src', pokemonData.imagen)
  
  //2.
  //Obtenemos los stats y creamos un array con los nombres de los atributos para que se agreguen automáticamente
  let pokemonStats = pokemonData.stats
  let atributes = ['hp', 'ataque', 'defensa', 'velocidad']

  //Realizamos un forEach de los atributos, para poder llamar a cada uno cuando se lo necesite
  atributes.forEach(atribute =>{
    //La función "fillPokemonData()" se ejecuta 1 vez por cada pokemon. A su vez, cada vez se va a
    //lanzar este forEach, que va a recorrer cada uno de los atributos para cada pokemon y mediante
    //querySelector va a obtener las barras de habilidad de cada atributo para cada pokemon
    let span = document.querySelector('#barra-' + atribute + '-' + order)

    //Función "setAmount()" que sirve para setear la barra de progreso en un atributo
    function setAmount(amount){
      //Función "colors()" para setear el color de la barra de progreso en un atributo
      function colors(color){
        return span.classList.add(color)
      }

      //Función "set()" que sirve para setear el porcentaje (width) del progreso
      function set(){
        return span.style.width = amount + '%'
      }

      //Lógica de la función "setAmount()"
      if(amount < 35){
        colors('rojo')
        set()
      } else if (amount >=35 && amount < 70){
        colors('amarillo')
        set()
      } else {
        colors('verde')
        set()
      }
    }
    
    //Este "forEach()" recorre cada uno de los stats obtenidos para cada pokemon
    //(hp, ataque, defensa y velocidad). Y cuando el stat del pokemon de la api,
    //coincide con el stat de html a configurar, llama a las funciones para que 
    //realicen las configuraciones necesarias.
    pokemonStats.forEach(stat => {
      if(stat.name == atribute){
        setAmount(stat.amount)
      }
    })
  })

}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});

