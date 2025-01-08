const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo'); // deletamo "Ana" e "Caio" e adicionamos  
//  Primeiro parâmetro é o start (início), que é um número, e o deleteCount, ou seja, quantos elementos serão excluídos a partir do início.
// listaEstudantes.push('Rodrigo');

console.log(listaEstudantes);

// O .splice reúne a possibilidade de excluir elementos específicos, não apenas do final, e também adicionar elementos em um lugar específico.