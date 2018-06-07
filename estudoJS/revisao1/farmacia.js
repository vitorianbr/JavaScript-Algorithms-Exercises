function calcularDoacao() {
  // captura os elementos da página
  var inConta = document.getElementById("inConta");
  var outResposta = document.getElementById("outResposta");

  var conta = Number(inConta.value);

  if (conta == 0 || isNaN(conta)) {
    alert("Informe um valor válido");
    inConta.focus();
    return;
  }

  // não tem decimais
  if (conta % 1 == 0) {
    outResposta.textContent = "Total a pagar R$: " + conta.toFixed(2);    
  } else {
    var total = Math.ceil(conta);
    var centavos = total - conta;
    outResposta.textContent = "Você pode doar R$ " + centavos.toFixed(2) +
                              " para a Santa Casa e pagar R$: " +
                              total.toFixed(2);
  }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDoacao);