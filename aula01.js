//Calculo do valor gasto de combustível por km rodado

const precoCombustivel = 5.79; 
const kmPorLitros = 10;
const distanciaEmkm = 100;

//console.log(distanciaEmkm / kmPorLitros * precoCombustivel.toFixed());

const litrosConsumidos = distanciaEmkm / kmPorLitros ;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));

//toFixed serve para fixar um valor, neste caso duas casas após a vírgula, ou sem parâmetro arredondando o valor.
