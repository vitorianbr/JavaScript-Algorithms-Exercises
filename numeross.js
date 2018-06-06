var numeros = [];

function adicionarNumero() {
    var num = document.getElementById("num");
    var outLista = document.getElementById("outLista");

    var number = num.value;

    if (number == "") {
        alert("Informe um número.");
        num.focus();
        return;
    }

    numeros.push(number);

    console.log(numeros)

    outLista.textContent = numeros.join("\n");

    num.value = "";
    num.focus();

}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionarNumero);

function ordemNumeros() {
    var outOrdem = document.getElementById("outOrdem");

    for (var i = 1; i < numeros.length; i++) {

        if (numeros[i] <= numeros[i - 1]) {//1,2,3
            outOrdem.textContent = "Não está em ordem.";
            return;
        }

    }

    outOrdem.textContent = "Está em ordem.";


}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", ordemNumeros);

function listarPares() {
    var outPares = document.getElementById("outPares");
    var pares = "";

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares = pares + numeros[i] + " ";
        }
    }
    outPares.textContent= "Pares: " + pares;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarPares);