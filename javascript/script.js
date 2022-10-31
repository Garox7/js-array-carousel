/*
1. Costruisco l'array contenente tutte le immagini
2. creo l'elemento img e inserisco tutte le immagini dell'array con un ciclo for per ogni elemento dell'array

3. Creo una variabile coincidente con gli elementi dell'array

4. aggiungo un evento di click ai bottoni up e down
    SE la variabile coincide con il numero degli elementi all'interno dell'array
        - si attiva la classe  "active" all'elemento corrente per mostrare l'immagine
        - il bottone rimane su active
    ALTRIMENTI
        - il bottone di disattiva 
*/


//Array
const myArrayImg = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
]

const sliderElement = document.querySelector('.slider__section__img');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

for (i = 0; i < myArrayImg.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.src = myArrayImg[i];
    imageElement.classList.add('slider__img');

    if (i === 0) {
        imageElement.classList.add('active')
    }

    sliderElement.append(imageElement);
}

const listImgElement = document.querySelectorAll('.slider__img');

let indexElement = 0;

btnDown.addEventListener('click', function() {

    listImgElement[indexElement].classList.remove('active');

    if (indexElement === 4) {
        indexElement = -1;
    }

    indexElement++;

    listImgElement[indexElement].classList.add('active');

    console.log(indexElement);
})

btnUp.addEventListener('click', function() {

    listImgElement[indexElement].classList.remove('active');

    if (indexElement === 0) {
        indexElement = 5;
    }
    indexElement--;

    listImgElement[indexElement].classList.add('active');

        console.log(indexElement);
})
