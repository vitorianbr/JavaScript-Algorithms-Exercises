function verificarDuracao() {
    var pesoKilo = document.getElementById("pesoKilo");
    var consumoGrama = document.getElementById("consumoGrama");
    var duracao;
    var sobras;

    var convertKg = pesoKilo.value * 1000;

    duracao = convertKg / consumoGrama.value;
    sobras = convertKg % consumoGrama.value;

    mostrarDuracao = document.getElementById("duracao");
    mostrarSobras = document.getElementById("sobras");

    mostrarDuracao.textContent = "A ração dura " + duracao.toFixed(0) + " dias.";
    mostrarSobras.textContent = "Sobra " + sobras + " gramas.";

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarDuracao);