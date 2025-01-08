const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

//O Set é um conjunto, e um conjunto é um tipo de dado que armazena valores únicos.
//é um tipo de dado que é array-like (parecido com um array), mas ele não é um array. Não tem acesso aos métodos de array.