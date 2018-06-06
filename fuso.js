function mostrarHoraFranca() {
  // captura os elementos da página
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");

  // obtém os dados de entrada
  var horaBrasil = Number(inHoraBrasil.value);

  // processamento (cálculo)
  var horaFranca = horaBrasil + 5;

  if (horaFranca >= 24) {
    horaFranca = horaFranca - 24;
  }

  // saída de dados (exibe a resposta)
  outHoraFranca.textContent = "Hora na França: " +
      horaFranca.toFixed(2);
}
var btVer = document.getElementById("btVer");
btVer.addEventListener("click", mostrarHoraFranca);