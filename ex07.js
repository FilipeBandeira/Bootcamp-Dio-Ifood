function escreverNome(nome) {
    return ('Meu nome é ' + nome);
}

//console.log(escreverNome('filipe'));

function verificarIdade(idade) {
    
    if (idade >= 18) {
        console.log (escreverNome('Filipe ') + 'tenho ' + idade + ' anos e sou maior de idade!');
    } else {
        console.log (escreverNome('Filipe ') + 'tenho ' + idade + ' anos e sou menor de idade!');;
    }
}

verificarIdade(17);