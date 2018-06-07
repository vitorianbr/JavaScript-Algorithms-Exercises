function calcularTotal() {
  // captura os elementos da página
  var inJantar = document.getElementById("inJantar");
  var outGarcom = document.getElementById("outGarcom");
  var outTotal = document.getElementById("outTotal");

  var jantar = Number(inJantar.value);

  if (jantar == 0 || isNaN(jantar)) {
    alert("Informe corretamente o valor do jantar");
    inJantar.focus();
    return;
  }

  var garcom = jantar * 0.10;
  var total = jantar + garcom;

  outGarcom.textContent = "Garçom R$: " + garcom.toFixed(2);
  outTotal.textContent = "Total R$: " + total.toFixed(2);
}
var btTotalizar = document.getElementById("btTotalizar");
btTotalizar.addEventListener("click", calcularTotal);