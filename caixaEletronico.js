function verificar() {
    var saque = document.getElementById("saque"); //160
    var notas100;
    var notas50;
    var notas10;
    var mostrarNota100 = document.getElementById("nota100");
    var mostrarNota50 = document.getElementById("nota50");
    var mostrarNota10 = document.getElementById("nota10");


    if (saque.value >= 100) {
        notas100 = (saque.value - saque.value % 100) / 100;
        saque = saque.value % 100;
        mostrarNota100.textContent = "Notas de R$ 100,00 : " + notas100;
        console.log("Notas de 100: " + notas100);
    } else {
        mostrarNota100.textContent = " ";
    }

    if (saque >= 50) {
        notas50 = (saque - saque % 50) / 50;
        saque = saque % 50;
        mostrarNota50.textContent = "Notas de R$ 50,00 : " + notas50;
        console.log("Notas de 50: " + notas50);
    } else {
        mostrarNota50.textContent = " ";
    }
    if (saque >= 10) {
        notas10 = (saque - saque % 10) / 10;
        console.log("Notas de 10: " + notas10);
        mostrarNota10.textContent = "Notas de R$ 10,00 : " + notas10;
    } else {
        mostrarNota10.textContent = " ";
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);