$(document).ready(function() {
    // Inicialización de Flickity
    var flkty = new Flickity('.carousel', {
        cellAlign: 'left',
        contain: true,
        autoPlay: 3000,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true
    });
    

    $(document).ready(function() {
        var topMovies = [
            "Avatar",
            "Vengadores: Endgame",
            "Titanic",
            "Star Wars: El despertar de la Fuerza",
            "Vengadores: Infinity War",
            "Spider-Man: No Way Home",
            "Jurassic World",
            "El Rey León",
            "Avatar: El sentido del agua",
            "Los Vengadores"
        ];
    
        var guessedMovies = [];
    
        function resetGame() {
            guessedMovies = [];
            $('#movieInput').val('');
            $('#guessesList').empty();
            $('#feedback').text('');
            $('#applauseImage').hide();
            $('#resetButton').hide();
        }
    
        $('#guessButton').click(function() {
            var guess = $('#movieInput').val().trim();
            if (guess) {
                if (topMovies.includes(guess)) {
                    if (!guessedMovies.includes(guess)) {
                        $('#feedback').text('¡Correcto! ' + guess + ' esta en el top 10 de películas taquilleras.');
                        $('#guessesList').append('<li>' + guess + '</li>');
                        guessedMovies.push(guess);
                        $('#applauseImage').show();
                        setTimeout(function() {
                            $('#applauseImage').hide();
                        }, 3000);
    
                        if (guessedMovies.length === topMovies.length) {
                            $('#feedback').text('¡Felicidades! Has adivinado todas las películas.');
                            $('#resetButton').show();
                        }
                    } else {
                        $('#feedback').text('Ya has adivinado ' + guess + '. Intenta con otra película.');
                    }
                } else {
                    $('#feedback').text('La película "' + guess + '" no está en la lista. Intenta con otra.');
                }
            } else {
                $('#feedback').text('Por favor, ingresa el nombre de una película.');
            }
        });
    
        $('#resetButton').click(function() {
            resetGame();
        });
    });
    

    const contenedor = document.getElementById("contenedor")
let codigoHTML = ""

for(let i=0; i<1; i++){
    //Aquí va todo mi code
    codigoHTML = codigoHTML +`
     <div class="card">
        <div class="numero">
            <h1>El guionista</h1>
        </div>
        <p class="parrafo">
Es la persona encargada de escribir el guión, pensando siempre cómo se llevará todo a la gran pantalla. Un guionista tiene conocimientos cinematográficos amplios, pero también debe tener conocimientos en escritura.
        </p>
    </div>`
}
for(let i=1; i<2; i++){
    //Aquí va todo mi code
    codigoHTML = codigoHTML +`
     <div class="card">
        <div class="numero">
            <h1>El productor</h1>
        </div>
        <p class="parrafo">
            En ocasiones se piensa que es la persona que tiene el dinero para financiar una película, pero su trabajo es mucho más complejo. Es la persona o grupo de personas encargadas de gestionar y administrar el proyecto.

        </p>
    </div>`
}
for(let i=2; i<3; i++){
    //Aquí va todo mi code
    codigoHTML = codigoHTML +`
     <div class="card">
        <div class="numero">
            <h1>El Rodaje</h1>
        </div>
        <p class="parrafo">
            El director de fotografía
En esta etapa es donde encontramos al director en su silla, cámaras rodando, ¡sonido, luces y acción!
El director de fotografía, el director de sonido, el director de arte, los actores, el director. 

        </p>
    </div>`
}
for(let i=3; i<4; i++){
    //Aquí va todo mi code
    codigoHTML = codigoHTML +`
     <div class="card">
        <div class="numero">
            <h1>La post producción</h1>
        </div>
        <p class="parrafo">
            En esta etapa se trabaja con todo el material grabado, se afinan los detalles, se retocan los errores, los colores y la iluminación. 
            El editor
Es el encargado principal del montaje de la película, la distribución y la publicidad.</p>
    </div>`
}



contenedor.innerHTML= codigoHTML
    

// document.getElementById('backgroundColor').addEventListener('input', function() {
//     const color = this.value;
//     document.getElementById('quiz').style.backgroundColor = color;
// });

});





