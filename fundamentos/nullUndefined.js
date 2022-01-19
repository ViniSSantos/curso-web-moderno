let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!!
//Referencia do endereçe, a var leva smp o valor junto de memória e o null 
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar usar undefined
console.log(!!produto.preco) // Usar !! ññ traz pro booleam
// delete produto.preco

console.log(produto)

produto.preco = null
console.log(produto.preco) // sem preço

console.log(!!produto.preco)
console.log(produto.preco)

// Nota Final: Conceito de REFERÊNCIA vs VALOR = atribuição




