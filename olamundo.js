function capturaNome(){
    var nome = document.getElementById("inputNome").value;
    var caixaOndeVouMostrar = document.getElementById('minhaCaixaDeExibicao');
    caixaOndeVouMostrar.innerHTML += " Bem vinda(o): " + nome;
}

function capturaIdade(){
    var idade = document.getElementById("inputIdade").value;
    var caixaOndeVouMostrar = document.getElementById('minhaCaixaDeExibicao');
    caixaOndeVouMostrar.innerHTML += " Idade: " + idade;
}