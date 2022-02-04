// pessoa ->(aponta) para endereço de momoria chamdo aqui de 123 -> {...}
const pessoas = {nome: 'João'}
pessoas.nome = 'Pedro'
console.log(pessoas)
// Em uma const ela aceita alterar o dado mas não o endereço de memória

// pessoas -> (endereço) 456 -> {...}
// pessoas = { nome: 'Ana' }

Object.freeze(pessoas) // Freeze = Sig. Congelar, usado para congelar o atributo pessoa.

pessoas.nome = 'Maria'
pessoas.end = 'Rua ABC'
delete pessoas.nome
console.log(pessoas.nome)
console.log(pessoas)

// Para ter um objeto sempre constante 
const pessoasConstante = Object.freeze({ nome: 'João' })
pessoasConstante.nome = 'Maria'
console.log(pessoasConstante)