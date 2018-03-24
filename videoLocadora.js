function conversor() { // Uma função é um bloco de código para realizar uma função determinada
    
    var inFilme = document.getElementById("inFilme"); //Rertorna o elemento pelo seu ID do Documento que é chamado 
    var inDuracao = document.getElementById("inDuracao");
    var mostraFilme = document.getElementById("mostrarFilme");
    var mostraConversao = document.getElementById("mostrarConversao");

    var convertHoras = (inDuracao.value / 60).toFixed(2); //Converte o valor retornado na variável inDuracao de min. para horas

    mostraFilme.textContent = "Filme: " + inFilme.value;
    mostrarConversao.textContent = "Duração: " + convertHoras + " horas";

} 

var conversorBtn = document.getElementById("btConverter");
conversorBtn.addEventListener("click", conversor); //Permite que o elemento armazenado na variável
                                                   //possar "ouvir" um evento do usuário, realizando a função
                                                   // específicada no parâmetro.
                                                   //Um evento é uma ação do usuário na página, como clicar, arrastar, passar o mouse
                                                   //apertar uma tecla etc...