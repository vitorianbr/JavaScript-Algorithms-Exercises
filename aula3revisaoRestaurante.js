function calcularRefeicao() { 
//capturar os elementos da pág 
var inPreco = document.getElementById("inPreco"); 
var inConsumo = document.getElementById("inConsumo");
var outResposta = document.getElementById("outResposta"); 

//obtém os conteúdos de entrada 
var preco = Number(inPreco.value); 
var consumo = Number(inConsumo.value); 

//calcula o valor a ser pago ao cliente
var aPagar = (consumo / 1000) * preco; 

//exibe resposta
outResposta.textContent="A Pagar R$: " + aPagar.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular"); 
btCalcular.addEventListener("click", calcularRefeicao); 