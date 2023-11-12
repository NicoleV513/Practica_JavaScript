function realizarOperacion() {
    // Obtener los valores del formulario
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    var resultadoElement = document.getElementById("resultado");

    // Verificar que el segundo número sea diferente de 0
    if (numero2 === 0 || isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.textContent = "Error: El segundo número debe ser diferente de 0 y ambos deben ser números válidos.";
        return;
    }

    // Realizar la operación seleccionada
    switch (operacion) {
        case "suma":
            var resultado = numero1 + numero2;
            resultadoElement.textContent = "Suma: " + resultado.toFixed(1);
            break;
        case "resta":
            var resultado = numero1 - numero2;
            resultadoElement.textContent = "Resta: " + resultado.toFixed(1);
            break;
        case "producto":
            var resultado = numero1 * numero2;
            resultadoElement.textContent = "Producto: " + resultado.toFixed(1);
            break;
        case "division":
            var resultado = numero1 / numero2;
            resultadoElement.textContent = "División: " + resultado.toFixed(1);
            break;
        default:
            resultadoElement.textContent = "Opción no válida";
            return;
    }
}