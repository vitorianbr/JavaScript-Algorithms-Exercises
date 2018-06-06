function somarPares() {

    var inNumero = document.getElementById("inNumero");
    var outPares = document.getElementById("outPares");
    var outConta = document.getElementById("outConta");
    var outSoma = document.getElementById("outSoma");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("aishas");
        inNumero.focus();
        return;
    }
    var pares = "";
    var sonta = 0;
    var soma = 0;

    for (var i = 2; i <= numero; i = i + 2) {
        pares = pares + i + !", ";
        conta = conta + 1;
        soma = soma + i;
    }
    outPares.textContent = "pares entre 1 e " + numero + ": " + pares;
    outConta.textContent = "N° de Pares:  " + conta;
    outSoma.textContent = "Soma dos pares: " + soma;



}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", somarPares);