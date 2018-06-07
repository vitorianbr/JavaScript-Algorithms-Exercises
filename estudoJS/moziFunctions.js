/*
EXERCICIO SINISTRO DE JAVASCRIPT DO MOZI:
- Crie o sistema de um banco, cadastre as seguintes informações do Usuário:
Nome, CPF, Ano de Nascimento, Idade Atual, valor em conta;

- Realize um saque na conta(verificando se é possível ou não):
Se o saque for possível, mostrar as informações cadastradas do usuário, e o valor restante em conta
Se o saque não for possível, enviar uma mensagem avisando que a transação falhou.
*/

function transacao() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const anoNasc = document.getElementById("anoNasc").value;
    let idade = 2018 - anoNasc;
    let valorConta = Number(document.getElementById("valorConta").value); //Type number não estava identificando milhar,
    const saque = document.getElementById("saque").value;                 //Por isso mudamos para text e convertemos o value para Number.
    const mostrarNome = document.getElementById("mostrarNome");
    const mostrarCPF = document.getElementById("mostrarCPF");
    const mostrarIdade = document.getElementById("mostrarIdade");
    const mostrarSaldo = document.getElementById("mostrarSaldo");
    const mostrarMsg = document.getElementById("mostrarMsg");

    console.log(valorConta >= saque);

    if (valorConta >= saque) {
        valorConta = valorConta - saque;

        mostrarMsg.textContent = "TRANSAÇÃO REALIZADA COM SUCESSO.";
        mostrarNome.textContent = "Nome: " + nome;
        mostrarCPF.textContent = "CPF: " + cpf;
        mostrarIdade.textContent = "Idade: " + idade;
        mostrarSaldo.textContent = "Saldo atual: R$ " + valorConta;

    } else {
        mostrarMsg.textContent = "Falha na transação. Saldo indisponível.";
    }
}

const btTransacao = document.getElementById("btTransacao");
btTransacao.addEventListener("click", transacao); 