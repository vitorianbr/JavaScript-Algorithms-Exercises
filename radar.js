function verificarVelocidade() {
    var velMaxima = document.getElementById("velMaxima");
    var velCondutor = document.getElementById("velCondutor");

    var mostrarResultado = document.getElementById("mostrarResultado");

    if (velCondutor.value <= velMaxima.value) {
        mostrarResultado.textContent = " Sem multa.";
    } else if (velCondutor.value > velMaxima.value
        && velCondutor.value <= parseInt(velMaxima.value) + (velMaxima.value * 20 / 100)) { //parseInt = transforma o valor em número Inteiro.
        mostrarResultado.textContent = " Multa leve.";
    } else if(velCondutor.value > parseInt(velMaxima.value) + (velMaxima.value * 20 / 100)){
        mostrarResultado.textContent = " Multa Grave.";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);

/*
100 <- limite
100 - 20% = 20
120 - multa leve


*/