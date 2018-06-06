function exibirTabuada() {
    // captura dos elementos da pag 
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    //Armazena o valor do elemento "inNumero" 
    var numero = inNumero.value;

    //valida o preechimento 
    if (numero == 0 || isNaN(numero)) {
        alert("informe um número válido");
        inNumero.focus();
        return;
    }

    //cria uma variável que irá acumular as multiplicações
    var resposta = "";

    // cria uma repetição de 1 até 10
    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n";
    }

    // exibe resposta
    outResposta.textContent = resposta;

}
const btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", exibirTabuada);