function calcularTaxa() {

    var valorJantar = document.getElementById("valorJantar");
    var mostrarTaxa = document.getElementById("taxa");
    var taxa = (valorJantar.value * 10) / 100;

    mostrarTaxa.textContent = "Valor do jantar: R$ " + valorJantar.value + ". " + "Taxa do garçom: " + taxa + ".";
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTaxa);