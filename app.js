
const obterNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear(){
    
    let quantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numero;


    for(let i = 0; i < quantidadeNumero; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        while(numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    alterarStatusBotao();
}

const alterarStatusBotao = ()=>{
    let botaoReinicar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');
    if(botaoReinicar.classList.contains('container__botao-desabilitado') && botaoSortear.classList.contains('container__botao')){

        botaoReinicar.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.remove('container__botao');
        botaoReinicar.classList.add('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');

    } else {
        botaoReinicar.classList.remove('container__botao');
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoReinicar.classList.add('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}

const reiniciar = ()=>{
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();

}