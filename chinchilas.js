function simular() {
    var numeroInicial = document.getElementById("numeroInicial").value;
    var anos = document.getElementById("anos").value;

    var mostrarQtd = document.getElementById("mostrarQtd");
    var lista = "";
    var calculo = numeroInicial;


    for (var i = 1; i <= anos; i++) {
        lista = lista + i + "° ano " + calculo + " chinchilas\n";
        calculo = calculo * 3;

    }

    mostrarQtd.textContent = lista;
}

var btSimular = document.getElementById("btSimular");
btSimular.addEventListener("click", simular);