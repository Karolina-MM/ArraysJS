const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

//Uma boa prática é substituir o nome por um underscore (_). 
//Isso significa que estamos marcando o lugar do parâmetro não utilizado
//mas assinalamos que não o usamos e ele deve ser pulado para utilizar o correspondente.