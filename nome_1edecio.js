function nomeEvidencia() {
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;

    var asterisco = " ";

    var mostrarNome = document.getElementById("mostrarNome");

    for (var i = 1; i <= numero; i++) {
        asterisco = asterisco + "*";

    }

    mostrarNome.textContent = asterisco + nome + asterisco;

}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", nomeEvidencia);