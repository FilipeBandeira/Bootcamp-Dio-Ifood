//Aqui está importando

const { gets, print } = require('./funcoes-auxiliares'); //object destructuring

/*const numerosSorteados = [];

for (let i = 0; i < 5; i++) { //Aqui vem a lista de todos os números
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) { // Aqui encontraremos o maior
    const numeroSorteado = numerosSorteados[i];
    
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);*/

//Forma mais simples de procurar o maior valor:

const quantidadeDeAlunos = gets() //Aqui ficamos dinâmicos, pois o array pode ter qualquer tamanho

let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
