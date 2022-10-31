/*
Costruisco un elemento img dandogli la classe "img__tumb"
li inserisco all'interno di "slider__section__tumb"

devo fare in modo di indicare l'immagine selezionata anche nelle img__tumb.
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
const tumbElement = document.querySelector('.slider__section__tumb');

for (i = 0; i < myArrayImg.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.src = myArrayImg[i];
    imageElement.classList.add('slider__img');

    const imageTumbElement = document.createElement('img');
    imageTumbElement.src = myArrayImg[i];
    imageTumbElement.classList.add('img__tumb');

    if (i === 0) {
        imageElement.classList.add('active');
        imageTumbElement.classList.add('selected');
    }

    sliderElement.append(imageElement);
    tumbElement.append(imageTumbElement);
}

const listImgElement = document.querySelectorAll('.slider__img');
const listTumbElement = document.querySelectorAll('.img__tumb');

let indexElement = 0;

btnDown.addEventListener('click', function() {

    listImgElement[indexElement].classList.remove('active');
    listTumbElement[indexElement].classList.remove('selected');

    if (indexElement === 4) {
        indexElement = -1;
    }
    indexElement++;

    listImgElement[indexElement].classList.add('active');
    listTumbElement[indexElement].classList.add('selected');

    console.log(indexElement);
})

btnUp.addEventListener('click', function() {

    listImgElement[indexElement].classList.remove('active');
    listTumbElement[indexElement].classList.remove('selected');


    if (indexElement === 0) {
        indexElement = 5;
    }
    indexElement--;

    listImgElement[indexElement].classList.add('active');
    listTumbElement[indexElement].classList.add('selected');

    console.log(indexElement);
})
