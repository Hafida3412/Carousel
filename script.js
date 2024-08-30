'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
let currentIndex = 1; // Initialiser à 1 pour l'élément central
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');
let isAnimating = false; // Pour éviter les clics rapides

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('carousel__item--main', 'carousel__item--left', 'carousel__item--right');

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
    if (!isAnimating) {
        isAnimating = true;
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
        setTimeout(() => isAnimating = false, 300); // Délai équivalent à la transition
    }
});

leftBtn.addEventListener('click', function() {
    if (!isAnimating) {
        isAnimating = true;
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
        setTimeout(() => isAnimating = false, 300); // Délai équivalent à la transition
    }
});

// Mettre à jour au chargement
updateCarousel();
