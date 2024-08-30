'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
let currentIndex = 1; // L'indice du carrousel commence à 1 pour l'élément central
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('carousel__item--main', 'carousel__item--left', 'carousel__item--right');
        // Mettre à jour les classes en fonction de l'indice actuel
        if (index === currentIndex) {
            item.classList.add('carousel__item--main');
        } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
            item.classList.add('carousel__item--left');
        } else if (index === (currentIndex + 1) % carouselItems.length) {
            item.classList.add('carousel__item--right');
        }
    });
}

// Événements pour les boutons
rightBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

leftBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

// Mettre à jour au chargement
updateCarousel();
