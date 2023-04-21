let nota1 = 7;
let nota2 = 8;
let nota3 = 10 ;

const media = ((nota1 + nota2 + nota3)/3);

if (media < 5) {
    console.log(`Sua média foi ${media.toFixed(2)}, com isso você está REPROVADO!`);
} else if (media >= 5 && media < 7) {
    console.log(`Sua média foi ${media.toFixed(2)}, com isso você está em RECUPARAÇÃO!`);
} else if (media >= 7) {
    console.log(`Sua media foi ${media.toFixed(2)}, com isso você está APROVADO!`);
} else {
    console.log (`Cadastre suas notas`);
}