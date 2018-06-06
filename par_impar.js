function verParImpar() {
  // captura os elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtém os dados de entrada
  var numero = Number(inNumero.value);

  if (numero % 2 == 0) {
    outResposta.textContent = numero + " é Par";
  } else {
    outResposta.textContent = numero + " é Ímpar";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verParImpar);