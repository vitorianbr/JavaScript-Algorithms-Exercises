function calcularDoacao() {
    var valorCompra = document.getElementById("valorCompra");
    var valorPagar = document.getElementById("valorPagar");

    if (valorCompra.value % 1 == 0) {
        valorPagar.textContent = valorCompra.value;
    }
    else {
        valorPagar.textContent = "Você pode fazer uma doação no valor de " + (parseFloat(valorCompra.value) % 1).toFixed(2) + " centavos para a Santa Casa.";
    }

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDoacao);
