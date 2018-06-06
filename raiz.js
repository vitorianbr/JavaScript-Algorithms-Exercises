function mostrarRaiz() {
  // capturar os elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtém os dados de entrada
  var numero = Number(inNumero.value);

  // se vazio (numero == 0) ou 
  // isNaN (Not-a-Number)
  if (numero == 0 || isNaN(numero)) {
    alert("Por favor, informe um número válido");
    inNumero.value = "";  // limpa o conteúdo do campo 
    inNumero.focus();     // posiciona no campo inNumero
    return;               // retorna à página
  }

  var raiz = Math.sqrt(numero);

  if (Math.floor(raiz) == raiz) {
    outResposta.textContent = "Raiz é: " + raiz;
  } else {
    outResposta.textContent = "Não há raiz exata para " + 
                                numero;
  }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarRaiz);