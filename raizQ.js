function raizQuadrada() {
    var numero = document.getElementById("numero");
    var mensagem = document.getElementById("mensagem");
    var resultado = Math.sqrt(numero.value); 

if ((resultado * resultado) == numero.value) { 
    mensagem.textContent = resultado;
} 
else { 
    mensagem.textContent = "Não há raíz exata para o número."
};
 
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", raizQuadrada);