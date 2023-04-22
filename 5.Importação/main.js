//Aqui está importando

const { gets, print } = require('./funcoes-auxiliares'); 

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteados.push(numerosSorteados);
}

print(numerosSorteados);