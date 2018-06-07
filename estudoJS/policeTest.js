function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    var total = nota1 * 10 + nota2 * 8 + nota3 * 6;
    var media = total / (10 + 8 + 6);

    var mostrar = document.getElementById("mostrar");

    mostrar.textContent = "A média de " + nome + " é " + media.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMedia);