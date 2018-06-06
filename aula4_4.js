function calcularMedia() {
  // captura os elementos da página
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outMedia = document.getElementById("outMedia");
  var outSituacao = document.getElementById("outSituacao");

  // obtém os dados de entrada
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  // processamento (cálculo da média)
  var media = (nota1 + nota2) / 2;

  // saída de dados (resposta)
  outMedia.textContent = "Média: " + media.toFixed(1);
  
  // cria uma condição se (if)
  if (media >= 7) {
    outSituacao.textContent = "Parabéns " + 
                              nome + ". Aprovado(a)!";
    outSituacao.style.color = "blue";                                                           
  } else {
    outSituacao.textContent = "Ops... " + nome + 
                              ". Reprovado(a).";  
    outSituacao.style.color = "red";                              
  }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMedia);