const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);

//"for… of": a sintaxe é mais simples.
//Ele responde a casos em que queremos simplesmente percorrer do primeiro índice do array até o último.