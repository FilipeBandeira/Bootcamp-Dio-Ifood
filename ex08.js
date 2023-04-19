function aplicarForma1(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarForma2(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarForma3(valor) {
    return (valor / 2);
}

function aplicarForma4(valor, acrescimo) {
    return (valor + (valor * (acrescimo / 100)))
}



function verificarValorDoProduto(){

    if (formaDePagamento === 1) {
        return (`Você escolheu a opção de pagamento no débito, por isso receberá 10% de desconto, valor final do produto: ${aplicarForma1(precoDeEtiqueta, 10)} reais.`);
    } else if (formaDePagamento === 2) {
        return (`Você escolheu a opção de pagamento dinheiro ou PIX, por isso receberá 15% de desconto, valor final do produto: ${aplicarForma2(precoDeEtiqueta, 15)} reais.`);
    } else if (formaDePagamento === 3) {
        return (`Você escolheu a opção de pagamento em duas vezes sem juros, valor a ser pago pelo produto: ${aplicarForma3(precoDeEtiqueta)} reais em duas parcelas.`);
    } else if (formaDePagamento === 4) {
        return (`Você escolheu a opção de mais de duas parcelas, por isso terá um acréscimo de 10%, valor final do produto: ${aplicarForma4(precoDeEtiqueta, 10)} reais.`);
    } else {
        return (`Informe o valor do produto!`);
    }
}

let precoDeEtiqueta = 100;
const formaDePagamento = 1; //Determinar as opções por números para faciliar a codificação, em comparações com abstrações

console.log(verificarValorDoProduto());