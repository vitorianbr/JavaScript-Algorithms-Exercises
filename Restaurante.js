function mostrar() {
    var precoKg = 5.90;
    var grmCliente = document.getElementById("grmCliente");
    var mostrar = document.getElementById("mostrar");

    var resultado = (grmCliente.value * precoKg) / 1000;
    mostrar.textContent = "Valor a pagar: R$ " + resultado;
}

var calcular = document.getElementById("btCalcular");
calcular.addEventListener("click", mostrar);