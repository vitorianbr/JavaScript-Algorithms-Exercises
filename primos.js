function verificarPrimos() {
    var numero = document.getElementById("numero").value;
    var primo = true;

    var mostrar = document.getElementById("mostrar");

    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
        }

    }
    if (primo == true) {
        mostrar.textContent = "É primo.";
    } else {
        mostrar.textContent = "Não é primo.";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPrimos);