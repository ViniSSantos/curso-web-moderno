console.log(typeof Array,typeof new Array, typeof [])

//Arrray instanciado
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // incluir novo na ultima posição do Array
console.log(aprovados.length) // .legth é usado para medir o tamanho de indices do array

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados === null)

console.log(aprovados)
aprovados.sort() //.sort = Organiza em Ordem Alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos','Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2' )// .splice( 1º indice(1) , 2º QuntsVezes Elimina(2), 3º adiciona a partir do indice 'Elemento' ) Adiciona e elimina elemntos em Array
//aprovados.splice(1, 0, 'Elemento1') // Á partir do indice 1, não elimina nada, adiciona elemnto
console.log(aprovados)
