function mostrar() { 
 var nome = document.getElementById("nome"); 
 var resposta = document.getElementById("resposta"); 

 resposta.textContent = "Olá " + nome.value;
} 
var btmostrar = document.getElementById("mostrar"); 
btmostrar.addEventListener("click", mostrar);