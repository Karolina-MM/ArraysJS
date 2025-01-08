const notas = [10, 6, 8, 5.5, 10];

notas.pop();// .pop é o método que exclui o último valor, ele modifica o array (alguns métodos criam novos arrays).

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));