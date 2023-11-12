function calcularPuntaje() {
    // Obtener los valores de respuestas correctas, incorrectas y en blanco
    var correctas = parseInt(document.getElementById('correctas').value) || 0;
    var incorrectas = parseInt(document.getElementById('incorrectas').value) || 0;
    var enBlanco = parseInt(document.getElementById('enBlanco').value) || 0;

    // Calcular el puntaje final
    var puntajeFinal = (correctas * 4) + (incorrectas * -1) + (enBlanco * 0);

    // Mostrar el puntaje final en el elemento con id 'resultado'
    document.getElementById('resultado').innerHTML = 'Puntaje Final: ' + puntajeFinal

}