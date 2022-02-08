const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo - Ele se preocupa + em como fazer do que em fazer

let total1 = 0
for (let i = 0; i < alunos.length; i++) { // o let i = variavel de controle para percorrer o Array
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo - Ele se preocupa com o que fazer e não como fazer

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Exemplo de escrita "Declarativa" em SQL

// select código, nome, email, form clientes where ativo = 1
