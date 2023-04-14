//Array for news
const news = [
    {
        titulo : "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl : "https://www.infobae.com/new-resizer/FZw0fsdsPps8uBj_6nDtt25VTvA=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/S6CWUAYNORHMPIZLOPKOHPIHCY.jpg",
        descripcion : "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
        fecha : "07/06/21",
        tipoNacional : true,
    },
    {
        titulo : "El gran gesto de Jennifer Lopez hacia Ben Affleck",
        imgUrl : "https://www.infobae.com/new-resizer/DtsmcSb2d5SCtOx1Z9Tm1EnAY90=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion : "La cantante fue vista averiguando escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
        fecha : "02/06/21",
        tipoNacional : false,
    },
    {
        titulo : "Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl : "https://www.infobae.com/new-resizer/fVhnmg8paOluiHMg1lv0y6xBZYo=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion : "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
        fecha : "01/06/21",
        tipoNacional : true,
    },
    {
        titulo : "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl : "https://www.infobae.com/new-resizer/_k4kuq55YsKIH8p21ZUH4sk0ymc=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/Y65RZ3M77ZBO3JZXGMP3OP6YVI.jpg",
        descripcion : "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
        fecha : "04/06/21",
        tipoNacional : false,
    },
    {
        titulo : "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl : "https://www.infobae.com/new-resizer/Nz2Pdgi6vqj0RWLuDzqWJq5T9dU=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion : "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
        fecha : "07/06/21",
        tipoNacional : true,
    },
    {
        titulo : "Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl : "https://www.infobae.com/new-resizer/fVhnmg8paOluiHMg1lv0y6xBZYo=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion : "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
        fecha : "01/06/21",
        tipoNacional : false,
    },
    {
        titulo : "El gran gesto de Jennifer Lopez hacia Ben Affleck",
        imgUrl : "https://www.infobae.com/new-resizer/DtsmcSb2d5SCtOx1Z9Tm1EnAY90=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion : "La cantante fue vista averiguando escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
        fecha : "02/06/21",
        tipoNacional : false,
    },
]


window.addEventListener('load', function(){    
    //Date
    let day = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let date = new Date();
    
    document.querySelector('.date').appendChild(document.createTextNode(day[date.getDay()] + ', ' + date.getDate() + ' de ' + month[date.getMonth()] + ' de ' + [date.getFullYear()]))


    //Creating html
    //National
    let nationalCarousel = document.querySelector('.carousel')
    let nationalNewsArray = news.filter(news => news.tipoNacional === true)
    function nationalNews(newsArray){
        for(let individualNews of newsArray){
            const templateNationalDiv = 
            `
                <div class="news">
                    <h3>${individualNews.titulo}</h3>
                    <div class="newsContent">
                        <img src="${individualNews.imgUrl}">
                        <p>${individualNews.descripcion}</p>
                    </div>
                    <span>${individualNews.fecha}</span>
                </div>
            `;
            nationalCarousel.innerHTML += templateNationalDiv
        }
        let calculateCarouselPercentage = 89 * newsArray.length 
        document.querySelector('.carousel').style.width = `${calculateCarouselPercentage}%`
        let calculateNewsPercentage = 100 / newsArray.length
        let obtainedNationalNewsDiv= document.querySelectorAll('.news')
        obtainedNationalNewsDiv.forEach((news, i) => {
            obtainedNationalNewsDiv[i].style.width = `${calculateNewsPercentage}%`
        })
    }
    nationalNews(nationalNewsArray)
    //International    
    let internationalCarousel = document.querySelector('.internationalCarousel')
    let internationalNewsArray = news.filter(news => news.tipoNacional === false)
    function internationalNews(newsArray){
        for(let individualNews of newsArray){
            let index = newsArray.indexOf(individualNews)
            const templateInternationalDiv = 
            `
            <div class="newsGlobal index${index} hidden">
                <div class>
                    <img src="${individualNews.imgUrl}">
                    <h3>${individualNews.titulo}</h3>
                </div>
                <p class="globalP">${individualNews.descripcion}</p>
                <span>${individualNews.fecha}</span>
            </div>
            `;
            internationalCarousel.innerHTML += templateInternationalDiv
        }
    }
    internationalNews(internationalNewsArray)
    document.querySelector('.index0').classList.remove('hidden')
    document.querySelector('.index1').classList.remove('hidden')


    //Making carousel to move
    //National
    let htmlNationalNews = document.querySelectorAll('.news')
    htmlNationalNews.forEach((element, i) => {
        htmlNationalNews[i].addEventListener('click', () => {
            let position = i
            let movePercentage = position * (-100 / nationalNewsArray.length)
            nationalCarousel.style.transform = `translateX(${movePercentage}%)`
        })
    })
    //International
    let position = 0
    function moveRight(){
        document.querySelector('.index' + position).classList.add('hidden')
        document.querySelector('.index' + (position + 2)).classList.remove('hidden')
        position += 1
    }
    function moveLeft(){
        document.querySelector('.index' + (position + 1)).classList.add('hidden')
        document.querySelector('.index' + (position - 1)).classList.remove('hidden')
        position -= 1
    }
    let htmlInternationalButtons = document.querySelectorAll('.moveButton')
    htmlInternationalButtons.forEach((element, i) => {
        htmlInternationalButtons[i].addEventListener('click', () => {
            let swipe = element.classList.contains('mbRight')
            if(swipe){
                //Move Right
                (position != (internationalNewsArray.length - 2)) ? moveRight() : ''
            } else if (swipe === false){
                //Move Left
                position != 0 ? moveLeft() : ''
            }
        })
    })
})

