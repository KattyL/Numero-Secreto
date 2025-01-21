let listaDeNumeros = []
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
    responsiveVoice.speak('Olá valter!', 'Brazilian Portuguese Female')
}

let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        exibirTextoNaTela('p', `Você descobriu com um total de ${tentativas} ${palavraTentativas}. Parabéns!`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        tentativas++
        exibirTextoNaTela('h1', 'Tente novamente.')
    }
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let listaQuantificada = listaDeNumeros.length;
    console.log(listaDeNumeros)
    console.log(numeroEscolhido)
    if (listaQuantificada >= 3) {
        listaDeNumeros.shift()
    }
    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumeros.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

mensagemInicial()