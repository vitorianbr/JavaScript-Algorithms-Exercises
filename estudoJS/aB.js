function mostrarResult() {
    var valorA = document.getElementById("valorA").value;
    var valorB = document.getElementById("valorB").value;

    var mostrarMult = document.getElementById("mostrarMult");
    var mostrarPar = document.getElementById("mostrarPar");
    var mostrarImpar = document.getElementById("mostrarImpar");

    var mult = "";
    var par = "";
    var imp = "";

    for (var i = 1; i <= valorB; i++) {

        if (i % valorA== 0) {
            mult = mult + i + ", ";
        }

        if (i % 2 == 0 && i % valorA == 0) {
            par = par + i + ", ";
        }

        if (i % 2 != 0 && i % valorA == 0) {
            imp = imp + i + ", ";
        }

    }

    mostrarMult.textContent = "Múltiplos: " + mult;
    mostrarPar.textContent = "Pares: " + par;
    mostrarImpar.textContent = "Ímpares: " + imp;

}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarResult);