//criar vetor global contendo lista de pacientes 
var pacientes = [];


function addPaciente() {
    var paciente = document.getElementById("paciente");
    var nomePaciente = paciente.value;

    if (nomePaciente == "") {
        alert("Informe o nome do paciente");
        paciente.focus(); //O Focus volta para o elemento que é "chamado".
        return;
    }

    //adiciona o novo paciente ao final do vetor 
    pacientes.push(nomePaciente);

    //executa function que mostra...
    mostrarFila();

    paciente.value = "";
    paciente.focus();
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addPaciente);

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes para serem atendidos");
        return;
    }

    var outAtende = document.getElementById("outAtende");

    outAtende.textContent = "Em atendimento: " + pacientes[0];

    //retira o 1° paciente (paciente[0]) da fila de espera
    pacientes.shift();
    mostrarFila();

}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);

function mostrarFila() {
    var outLista = document.getElementById("outLista");

    var lista = "";

    //exibe pacientes em espera 
    for (var i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}