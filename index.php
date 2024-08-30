<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Carrousel</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="carousel">
        <!-- Carrousel Content -->
        <div class="carousel__item carousel__item--left">
            <img src="img/chiots.jpg" alt="Un chiot">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        <div class="carousel__item carousel__item--main">
            <img src="img/chien_qui_dort.jpg" alt="Un chien qui dort">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        <div class="carousel__item carousel__item--right">
            <img src="img/tete_chien.jpg" alt="Une tête de chien">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        <div class="carousel__item carousel__item--right">
            <img src="img/chien_lunettes.jpg" alt="Un chien avec des lunettes">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        <div class="carousel__item carousel__item--right">
            <img src="img/chien_cotillon.jpg" alt="Un chien avec un cotillon">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        <div class="carousel__item carousel__item--right">
            <img src="img/chien_balle.jpg" alt="Un chien avec une balle">
            <div class="carousel__text">
                <h3>Chiot Mignon</h3>
                <p>Il est pas mignon ?!</p>
            </div>
        </div>
        
        <div class="carousel__btns">
            <button class="carousel__btn" id="leftBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"/>
                </svg>
            </button>
            <button class="carousel__btn" id="rightBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"/>
                </svg>
            </button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
