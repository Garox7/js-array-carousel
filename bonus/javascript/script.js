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

    if (indexElement < listImgElement.length - 1) {
        btnUp.style.visibility = 'visible';

        listImgElement[indexElement].classList.remove('active');
        indexElement++;
        listImgElement[indexElement].classList.add('active');

        // console.log(indexElement);


    } else {
        btnDown.style.visibility = 'hidden';
    }
})

btnUp.addEventListener('click', function() {
    
    if (indexElement > 0) {
        btnDown.style.visibility = 'visible';

        listImgElement[indexElement].classList.remove('active');
        indexElement--;
        listImgElement[indexElement].classList.add('active');

        // console.log(indexElement);

    } else if (indexElement === 0) {
        btnUp.style.visibilty = 'hidden';
    }
})
