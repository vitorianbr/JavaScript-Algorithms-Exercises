function verificarMulta() {
  // cria uma referência aos elementos da página
  var inVelPermitida = document.getElementById("inVelPermitida");
  var inVelCondutor = document.getElementById("inVelCondutor");
  var outSituacao = document.getElementById("outSituacao");

  // obtém e converte conteúdo dos campos de Velocidade
  var velPermitida = Number(inVelPermitida.value);
  var velCondutor = Number(inVelCondutor.value);

  // se não preencheu ou Not-a-Number (NaN)
  if (velPermitida == 0 || isNaN(velPermitida) ||
    velCondutor == 0 || isNaN(velCondutor)) {
    // exibe mensagem de advertência
    alert("Informe as velocidades corretamente...");
    // posiciona no campo de edição inVelPermitida
    inVelPermitida.focus();
    return;
  }

  // calcula limite de multa leve
  var maisVinte = velPermitida * 1.20;

  // cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida) {
    outSituacao.textContent = "Situação: Sem Multa";
  } else if (velCondutor <= maisVinte) {
    outSituacao.textContent = "Situação: Multa Leve";
  } else {
    outSituacao.textContent = "Situação: Multa Grave";
  }
}
// cria uma referência ao elemento btExibir (botão)
var btVerificar = document.getElementById("btVerificar");
// registra um evento associado ao botão, para carregar verificarMulta
btVerificar.addEventListener("click", verificarMulta);