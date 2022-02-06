const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // .pop = Elimina o ultimo elemento do Array, Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen') // .push = Adiciona ao ultimo elemento do Array
console.log(pilotos)

pilotos.shift() // .shift = Elimina o primiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona ao primeiro elemento do Array
console.log(pilotos)

// Adicionar elementos

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover Elementos

pilotos.splice(3, 1) // Massa quebrou :( 
console.log(pilotos)

// Novo Array á partir de um Array

const algunsPilotos1 = pilotos.slice(2) // Novo Array á partir do indice (x)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Á partir do indice(1) , até o indice (4) sem inclui-lo
console.log(algunsPilotos2)