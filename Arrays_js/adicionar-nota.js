const notas = [10, 6, 8];

notas.push(7); // .push é o método que adiciona mais um valor no array, coloca como último valor.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);