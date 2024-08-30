'use strict';

// Sélectionner tous les éléments du carrousel
const carouselItems = document.querySelectorAll('.carousel__item');
let currentIndex = 1; // Initialiser à 1 pour l'élément central
const leftBtn = document.querySelector('#leftBtn'); // Bouton de gauche
const rightBtn = document.querySelector('#rightBtn'); // Bouton de droite
let isAnimating = false; // Pour éviter les clics rapides

// Fonction pour mettre à jour l'état du carrousel
function updateCarousel() {
    // Parcourir chaque élément du carrousel
    carouselItems.forEach((item, index) => {
        // Retirer les classes précédentes
        item.classList.remove('carousel__item--main', 'carousel__item--left', 'carousel__item--right');

        // Ajouter la classe "main" à l'élément actuellement affiché
        if (index === currentIndex) {
            item.classList.add('carousel__item--main');
        } 
        // Ajouter la classe "left" à l'élément précédent
        else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
            item.classList.add('carousel__item--left');
        } 
        // Ajouter la classe "right" à l'élément suivant
        else if (index === (currentIndex + 1) % carouselItems.length) {
            item.classList.add('carousel__item--right');
        }
    });
}

// Événements pour le bouton de droite (suivant)
rightBtn.addEventListener('click', function() {
    // Vérifier si une animation est en cours
    if (!isAnimating) {
        isAnimating = true; // Indiquer qu'une animation commence
        // Passer à l'index suivant
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel(); // Mettre à jour le carrousel
        // Rétablir 'isAnimating' après 300ms (durée de la transition)
        setTimeout(() => isAnimating = false, 300); // Délai équivalent à la transition
    }
});

// Événements pour le bouton de gauche (précédent)
leftBtn.addEventListener('click', function() {
    // Vérifier si une animation est en cours
    if (!isAnimating) {
        isAnimating = true; // Indiquer qu'une animation commence
        // Passer à l'index précédent
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel(); // Mettre à jour le carrousel
        // Rétablir 'isAnimating' après 300ms (durée de la transition)
        setTimeout(() => isAnimating = false, 300); // Délai équivalent à la transition
    }
});

// Mettre à jour le carrousel lors du chargement de la page
updateCarousel();
