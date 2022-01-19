const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// com o const [] esxtraimos de uma variavel e atribuimos a outra de forma dinâmica
// o Arry é um operador de atribuição []

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Usar o sinal [], {}, do lado ESQUERDO da operação serve para DESTRUCTURING