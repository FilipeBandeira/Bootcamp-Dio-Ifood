const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoPorKm = 10;
const distanciaDaViagem = 100;

const tipoCombustivel = 'Etanol';

const valorEtanol = (distanciaDaViagem / gastoPorKm * precoEtanol);
const valorGasolina = (distanciaDaViagem /gastoPorKm * precoGasolina);

if (tipoCombustivel === 'Etanol') {
    console.log(`O valor final gasto com o Etanol será de ${valorEtanol.toFixed(2)}`);
} else if (tipoCombustivel === 'Gasolina') {
    console.log(`O valor final gasto com a Gasolina será de ${valorGasolina.toFixed(2)}`);
} else {
    console.log('Abasteça!');
}