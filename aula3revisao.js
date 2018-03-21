function mostrarPromocao() { 
 //captura os elementos da página. 
 var inModelo = document.getElementById("inModelo"); 
 var inPreco = document.getElementById("inPreco"); 
 var outVeiculo = document.getElementById("outVeiculo"); 
 var outEntrada = document.getElementById("outEntrada"); 
 var outSaldo = document.getElementById("outSaldo"); 

 //obtém o conteúdo dos campos de entrada  
 var modelo = inModelo.value; 
 var preco = Number(inPreco.value); 

 //calcula a entrada e valor das parcelas 
 var entrada = preco * 0.50; 
 var parcela = (preco * 0.50) / 12; 
 
 //exibir as respostas 
 outVeiculo.textContent = "Promoção do " + modelo; 
 outEntrada.textContent = "Entrada de R$ "+ entrada.toFixed(3); 
 outSaldo.textContent= "+ 12x de R$ " + parcela.toFixed(2);
} 
var btExibir = document.getElementById("btExibir"); 
btExibir.addEventListener("click", mostrarPromocao);