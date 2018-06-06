function calcularLucro() {
    var lucros = document.getElementById("lucros").value;
    var qtdCapangas = document.getElementById("qtdCapangas").value;

    var mostrarShin = document.getElementById("mostrarShin");
    var mostrarCapangas = document.getElementById("mostrarCapangas");
    var mostrarOrg = document.getElementById("mostrarOrg");

    var shin = (lucros * 25) / 100;
    lucros = lucros - shin;
    var capangas = lucros / qtdCapangas;
    var org = lucros % qtdCapangas;

    mostrarShin.textContent = "Lucros de Shady Shin: " + shin;
    mostrarCapangas.textContent = "Lucro dos capangas: " + capangas.toFixed(2);
    mostrarOrg.textContent = "Lucro de Reserva: " + org.toFixed(2);


}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularLucro);