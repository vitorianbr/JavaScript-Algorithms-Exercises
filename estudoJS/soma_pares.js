function somarNumeros() {
    //captura dos elementos da pag
    var inNumero = document.getElementById("inNumero");
    var outPares = document.getElementById("outPares");
    var outConta = document.getElementById("outConta");
    var outSoma = document.getElementById("outSoma");

    //obtém o conteúdo do campo de entrada
    var numero = Number(inNumero.value);

    //verifica se preenchido corretamente
    if (numero == o || isNaN(numero)) {
        alert("Informe corretamente o número");
        inNumero.focus();
        return;
    }

    var pares = "";
    var conta = 0;
    var soma = 0;

    for (var i = 2; i <= numero; i = i + 2) {
        pares = pares + i + ", ";
        conta = conta + 1;
        soma = soma + i;
    }

    outPares.textContent = "Pares entre 1 e " + numero + ": " + pares;
    outConta.textContent = "N° de Pares: " + soma;
    outSoma.textContent = "Soma dos Pares: " + soma;

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", somarNumeros);