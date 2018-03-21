function dobrarNum() { 
  var num = Number(document.getElementById("numero").value); 

  var dobro = num * 2; 

  document.getElementById("resposta").textContent 
                 = "Dobro é: " + dobro;
} 
var btCalcular = document.getElementById("btCalcular"); 
btCalcular.addEventListener("click", dobrarNum);