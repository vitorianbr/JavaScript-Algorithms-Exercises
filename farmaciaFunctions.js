function calcularValores() {
    var nomeMedicamento = document.getElementById("nomeMedicamento");
    var precoMedicamento = document.getElementById("precoMedicamento");
    var quantd = document.getElementById("quantdMedicamento");

    var mostrarMedicamento = document.getElementById("mostrarMedicamento");
    var mostrarValor = document.getElementById("mostrarValor");
    var mensagem = document.getElementById("mensagem");

    var valorTotal;

    if (quantd.value >= 2) {
        valorTotal = (precoMedicamento.value * quantd.value).toFixed(0);
        mensagem.textContent = "Parabéns, você recebeu a promoção. Os centavos foram descontados."
    } else {
        valorTotal = (precoMedicamento.value * quantd.value).toFixed(2);

    }

    mostrarMedicamento.textContent = "Nome do medicamento: " + nomeMedicamento.value;
    mostrarValor.textContent = "Preço do medicamento: R$ " + valorTotal;
    
}    
     
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValores);
