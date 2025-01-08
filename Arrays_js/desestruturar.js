const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista; //desestruturação do array listas nos arrays alunos e média
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    // const mediaAluno = lista[1][indice]; 
    console.log(`${aluno} tem a média: ${mediaAluno}`);
  } else {
    console.log('Estudante não existe na lista.');
  }
}

exibeNomeENota('Juliana');
exibeNomeENota('Mari');

