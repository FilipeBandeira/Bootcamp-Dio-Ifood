let precoDeEtiqueta = 100;
const formaDePagamento = 4; //Determinar as opções por números para faciliar a codificação, em comparações com abstrações

if (formaDePagamento === 1) {
    console.log(`Você escolheu a opção de pagamento no débito, por isso receberá 10% de desconto, valor final do produto: ${precoDeEtiqueta - (precoDeEtiqueta * 0.1)} reais.`);
} else if (formaDePagamento === 2) {
    console.log(`Você escolheu a opção de pagamento dinheiro ou PIX, por isso receberá 15% de desconto, valor final do produto: ${precoDeEtiqueta - (precoDeEtiqueta * 0.15)} reais.`);
} else if (formaDePagamento === 3) {
    console.log(`Você escolheu a opção de pagamento em duas vezes sem juros, valor a ser pago pelo produto: ${precoDeEtiqueta / 2} reais em duas parcelas.`);
} else if (formaDePagamento === 4) {
    console.log(`Você escolheu a opção de mais de duas parcelas, por isso terá um acréscimo de 10%, valor final do produto: ${precoDeEtiqueta + (precoDeEtiqueta * 0.1)} reais.`);
} else {
    console.log(`Informe o valor do produto!`);
}

