function loja() { 
    var produto = document.getElementById("nomeProduto"); 
    var preco = document.getElementById("precoProd"); 
    var mostrarProduto = document.getElementById("mostrarProduto"); 
    var mostrarDesconto = document.getElementById("mostrarDesconto"); 
    var mostrarParcelas = document.getElementById("mostrarParcelas"); 

    var desconto = preco.value - (preco.value * 10 / 100);
    var valorParcelas = preco.value / 3;  

    mostrarProduto.textContent = "Produto: " + produto.value; 
    mostrarDesconto.textContent = "A vista com desconto: R$ " + desconto.toFixed(2); 
    mostrarParcelas.textContent = "Valor das parcelas em 3x: R$ " + valorParcelas.toFixed(2);
} 

var btCalcular = document.getElementById("btCalcular"); 
btCalcular.addEventListener("click", loja);