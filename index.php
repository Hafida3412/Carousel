<!DOCTYPE html>
<html lang="fr"> <!-- Déclaration du type de document et spécification de la langue (français) -->
<head>
    <meta charset="UTF-8"> <!-- Spécification de l'encodage des caractères -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Réglage pour la compatibilité responsive sur les appareils mobiles -->
    <title>Mon Carrousel</title> <!-- Titre de la page affiché dans l'onglet du navigateur -->
    <link rel="stylesheet" href="styles.css"> <!-- Lien vers le fichier CSS pour styliser le carrousel -->
</head>
<body>
    <div class="carousel"> <!-- Conteneur principal du carrousel -->
        <!-- Contenu du Carrousel -->
        <div class="carousel__item carousel__item--left"> <!-- Élément de carrousel positionné à gauche -->
            <img src="img/chiots.jpg" alt="Un chiot"> <!-- Image avec un texte alternatif pour l'accessibilité -->
            <div class="carousel__text"> <!-- Conteneur pour le texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre de l'élément du carrousel -->
                <p>Il est pas mignon ?!</p> <!-- Texte descriptif de l'élément du carrousel -->
            </div>
        </div>
        <div class="carousel__item carousel__item--main"> <!-- Élement principal du carrousel -->
            <img src="img/chien_qui_dort.jpg" alt="Un chien qui dort"> <!-- Image -->
            <div class="carousel__text"> <!-- Texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre -->
                <p>Il est pas mignon ?!</p> <!-- Description -->
            </div>
        </div>
        <div class="carousel__item carousel__item--right"> <!-- Élément de carrousel positionné à droite -->
            <img src="img/tete_chien.jpg" alt="Une tête de chien"> <!-- Image -->
            <div class="carousel__text"> <!-- Texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre -->
                <p>Il est pas mignon ?!</p> <!-- Description -->
            </div>
        </div>
        <!-- Les éléments suivants sont des éléments supplémentaires mais leur classe est incorrecte -->
        <div class="carousel__item carousel__item--right"> <!-- Les classes devraient être modifiées pour éviter la répétition -->
            <img src="img/chien_lunettes.jpg" alt="Un chien avec des lunettes"> <!-- Image -->
            <div class="carousel__text"> <!-- Texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre -->
                <p>Il est pas mignon ?!</p> <!-- Description -->
            </div>
        </div>
        <div class="carousel__item carousel__item--right"> <!-- Encore ici, ID identiques -->
            <img src="img/chien_cotillon.jpg" alt="Un chien avec un cotillon"> <!-- Image -->
            <div class="carousel__text"> <!-- Texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre -->
                <p>Il est pas mignon ?!</p> <!-- Description -->
            </div>
        </div>
        <div class="carousel__item carousel__item--right"> <!-- Et encore ici -->
            <img src="img/chien_balle.jpg" alt="Un chien avec une balle"> <!-- Image -->
            <div class="carousel__text"> <!-- Texte de description -->
                <h3>Chiot Mignon</h3> <!-- Titre -->
                <p>Il est pas mignon ?!</p> <!-- Description -->
            </div>
        </div>
        
        <!-- Boutons de navigation pour le carrousel -->
        <div class="carousel__btns"> <!-- Conteneur pour les boutons -->
            <button class="carousel__btn" id="leftBtn"> <!-- Bouton pour naviguer vers la gauche -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <!-- Icone SVG pour le bouton -->
                    <path fill="currentColor" fill-rule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"/> <!-- Chemin de l'icône -->
                </svg>
            </button>
            <button class="carousel__btn" id="rightBtn"> <!-- Bouton pour naviguer vers la droite -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">  <!-- Icone SVG pour le bouton -->
                    <path fill="currentColor" fill-rule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"/> <!-- Chemin de l'icône -->
                </svg>
            </button>
        </div>
    </div>
    <script src="script.js"></script> <!-- Lien vers le fichier JavaScript pour la fonctionnalité du carrousel -->
</body>
</html>
