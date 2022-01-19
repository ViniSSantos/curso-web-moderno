// O Array é um Agrupador (vetor) de forma linear 
const valores = [7.7, 8.9, 6.3, 9.2] // Array = Estrutura indexada (com indice) começamdo do 0.
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 30
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores) // Array é um tipo de objeto com coisas kkk são 03:22 am cansado já 27/12/2021

