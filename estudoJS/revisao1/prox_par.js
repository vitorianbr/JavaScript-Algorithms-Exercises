function mostrarProx() {
  // captura os elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido");
    inNumero.focus();
    return;
  }

  var prox;
  if (numero % 2 == 0) {
    prox = numero + 2;
  } else {
    prox = numero + 1;
  }

  outResposta.textContent = "Próximo Par: " + prox;
}
var btVer = document.getElementById("btVer");
btVer.addEventListener("click", mostrarProx);