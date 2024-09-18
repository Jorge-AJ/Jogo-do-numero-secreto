// let é a variavel criata para dar valor ao titulo, usando o document.querySelector o java altera lá no html
//let titulo = document.querySelector ('h1');
//Aqui a com a variavel criada chamada titulo foi atribuido um valor com sinal de igual dizendo que ela tem o valor jogo do numero secreto, isso já altera no front do site na area que fica o titulo
//titulo.innerHTML = 'Jogo do número secreto';
//aqui foi o mesmo de cima mas criamos uma nova variavel chamada paragrafo e com document.querySelector selecionamos o P do html onde fica o paragrafo do nosso front do site
//let paragrafo = document.querySelector ('p');
// Aqui ja usamos a variavel paragrafo com .innerhtml para atribuir o valor no caso escolha um numero de 1 a 10, alterando direto no html e alterando o front da pagina 
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';
// function criamos uma função para criar uma ação aqui vamos criar a função para verificar o chute, para isso colocamos {} as funções precisam ser descritivas o console,log foi usado para verificar se a função do botão estava sendo usada

//assim toda vez que tiver tag vai ser substituido pelo h1 ou p
let listaDeNumerosSorteados = [];
let numerolimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

    function exibirMensagemInicial() {exibirTextoNaTela    ('h1','Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
        
    }
     exibirTextoNaTela('h1','Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute(){ 
     let chute = document.querySelector('input').value;
     console.log (chute == numeroSecreto)
     if (chute == numeroSecreto) {exibirTextoNaTela('h1', 'Acertou!')
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTetativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
exibirTextoNaTela('p', mensagemTetativas);
document.getElementById('reiniciar').removeAttribute('disabled');

} else {
    if (chute > numeroSecreto){
    exibirTextoNaTela('p','O Número secreto é menor');
    }else { exibirTextoNaTela('p', 'O número secreto é maior');}
    tentativas++;
    limparCampo();
 }
}
//função para gerar numero aleatorio o return é o retorno para chamar a função
//A palavra-chave return não é obrigatória em JavaScript, mas é frequentemente usada para especificar um valor a ser retornado pela função.
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == numerolimite){listaDeNumerosSorteados = []}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { 
        return gerarNumeroAleatorio ();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
// função para limpar o campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',   
   true);
  }