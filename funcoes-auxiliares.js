//Aqui está exportanto

const entradas = [10, 7, 11, 6, 23, 9, 33, 55, 72, 25]; //O primeiro número quantifica o tamanho do array
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };