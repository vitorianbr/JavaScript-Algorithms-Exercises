function exibirDivisores() {
    var numero = document.getElementById("numero").value;
    var lista = " ";

    var mostrar = document.getElementById("mostrar");

    for(var i = 1; i <= numero; i++) {
        if(numero % i == 0) {
            lista = lista + " " + i;
        }
    }

    mostrar.textContent = "Divisores: " + lista;
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirDivisores);