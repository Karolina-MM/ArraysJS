const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);

//i++ é conhecido como pós-incremento.
//Primeiro retorna o valor atual de i e depois incrementa i em 1 unidade.

//++i é conhecido como pré-incremento. Primeiro incrementa i em 1 unidade e depois retorna o novo valor de i.
