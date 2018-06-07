function calcularMacas() {
    var numMacas = document.getElementById("numMacas").value;

    var irmaos = numMacas / 3;
    var vizinha = 1;

    var mostrarIrmaos = document.getElementById("mostrarIrmaos");
    var mostrarVizinha = document.getElementById("mostrarVizinha");

    if (numMacas % irmaos == 0) {
        mostrarIrmaos.textContent = "Irmaos: " + irmaos;
    } else {
        mostrarIrmaos.textContent = "Irmãos: " + irmaos;
        mostrarVizinha.textContent = "Vizinha: " + vizinha;
    }


}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMacas);