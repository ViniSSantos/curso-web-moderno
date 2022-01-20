const fabricantes = ['Mercedes', 'Audi','BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // O "incice + 1" serve para pular o zero
}

fabricantes.forEach(imprimir) // "forEach" é uma função de fabricantes e fabricantes é um Array e dentro dele tem a função "FOREACH"
/*fabricantes.forEach(function(fabricantes) { //passr a função dentro de forEach faz ele ler udo dentro do Array
    console.log(fabricantes)
})*/
fabricantes.forEach(fabricantes => console.log(fabricantes)) // usando arrow function