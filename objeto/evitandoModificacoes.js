// Object.preventExtensions (Prevenindo extensões no objeto)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // .isExtensible() Essa funçaõ testa se é estensível ou não.

produto.nome = 'Borracha' // Permite alterar os dados 
produto.descricao = 'Borracha escolar branca' //Não permite incluir novos dados
delete produto.tag
console.log(produto)

//Object.seal   = selado
const pessoa = { nome: 'Luísa', idade: 23}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // .isSealed = Testar se objeto é ou não SELADO

pessoa.sobrenome = 'Ducatti'
pessoa.idade = 24
delete pessoa.nome
console.log(pessoa)

// Object.freeze = selado + valores constantes
