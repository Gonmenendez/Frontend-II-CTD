let theme = confirm('Would you like to go into dark mode?')

theme ? '' : document.querySelector('body').classList.remove('dark')


//Felines array for dynamic html creations
let felines = [
    {
        title : 'El tigre',
        imgUrl : './imagenes/tiger.jpg',
        paragraph : 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)\npertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.',
    },
    {
        title : 'El leon',
        imgUrl : './imagenes/leon.jpg',
        paragraph : 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    },
    {
        title : 'El leopardo',
        imgUrl : './imagenes/leopardo.jpg',
        paragraph : 'El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).',
    },
    {
        title : 'La pantera negra',
        imgUrl : './imagenes/pantera-negra.jpg',
        paragraph : 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.',
    },
    {
        title : 'El jaguar',
        imgUrl : './imagenes/jaguar.jpg',
        paragraph : 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).',
    },
    {
        title : 'El guepardo',
        imgUrl : './imagenes/chita.jpg',
        paragraph : 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.',
    },
]


//Creating a dynamic html from js using nodes notation method
/*
function felineMaker(felinesList){
    let container = document.querySelector('.contenedor')
    for(let feline of felinesList){
        //AppendChild for container div
        let felineDiv = document.createElement('div')
        felineDiv.setAttribute('class', 'item')
        //felineDiv.classList.add('item')


        //Apprend children for item div
        let felineImg = document.createElement('img')
        felineImg.setAttribute('src', feline.imgUrl)

        let felineTitle = document.createElement('h2')
        let title = document.createTextNode(feline.title)

        let felineDescriptionP = document.createElement('p')
        let description = document.createTextNode(feline.paragraph)


        //Dynamic application for html
        felineTitle.appendChild(title)
        felineDescriptionP.appendChild(description)

        felineDiv.appendChild(felineImg)
        felineDiv.appendChild(felineTitle)
        felineDiv.appendChild(felineDescriptionP)
        container.appendChild(felineDiv)
    }
}

felineMaker(felines)
*/



//Creating dynamic html using template literals method
let container = document.querySelector('.contenedor')
function felineMaker(felineList){
    for (let feline of felineList){
        const felineTemplate = `
            <div class= 'item'>
                <img src='${feline.imgUrl}'>
                <h2>${feline.title}</h2>
                <p>${feline.paragraph}</p>
            </div>
        `;
        container.innerHTML += felineTemplate
    }
}
felineMaker(felines)