'use strict';/*Il est recommandé d'utiliser le mode strict pour écrire un code 
JavaScript plus sécurisé et moins susceptible de contenir des erreurs.*/

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

/*Explication des parties clés :

1. Sélection des éléments :
carouselItems : Ceci sélectionne tous les éléments du carrousel et les stocke dans 
une liste.

2. leftBtn et rightBtn : Ces sélections permettent d'accéder aux boutons pour naviguer 
dans le carrousel.

3. Gestion de l'index actuel :
currentIndex maintient l'index de l'élément actuellement affiché dans le carrousel.

4. Fonction updateCarousel :
C'est ici que la logique pour mettre à jour les éléments du carrousel est gérée. 
Elle retire les classes d'état des anciens éléments et ajoute les classes appropriées 
basées sur l'index actuel.

5. Gestion des événements de bouton :
Lorsqu'un bouton est cliqué, nous vérifions d'abord si une animation est déjà en cours 
pour éviter que l'utilisateur ne clique plusieurs fois rapidement.

6. setTimeout est utilisé pour réinitialiser l'indicateur d'animation (isAnimating) après
un délai de 300 millisecondes, ce qui correspond normalement à la durée de la transition 
CSS.

7. Appel initial de updateCarousel :
Cela met à jour l'état du carrousel lors du chargement, garantissant que le bon élément est affiché immédiatement.
*/