console.log("birl");
function mostrar() {
    var modeloVeiculo = document.getElementById("modelo");
    var preco = document.getElementById("preco");
    var valorEntrada = preco.value / 2;
    var valorParcela = valorEntrada / 12;
    var mostrarModelo = document.getElementById("mostrarModelo");
    var mostrarEntrada = document.getElementById("mostrarEntrada");
    var mostrarParcelas = document.getElementById("mostrarParcelas");

    mostrarModelo.textContent = "Veículo: " + modeloVeiculo.value;
    mostrarEntrada.textContent = "Entrada: R$ " + valorEntrada;
    mostrarParcelas.textContent = "Valor das Parcelas: R$ " + valorParcela;


}

var btMostrar = document.getElementById("btCalcular");
btMostrar.addEventListener("click", mostrar);