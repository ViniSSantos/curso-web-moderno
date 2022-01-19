//Para cada um dos elemento da nota ele te devolve o indice "i" 
//( i in + var )
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas) { // Recebe o indice e ñ a nota
    console.log(i, notas[i]) // Acessa a nota via Array
}

// Pegando Atributos de um OBJETO

const pessoa = {
    nome: 'luísa',
    sobrenome: 'Ducatti',
    idade: 23,
    peso: 60,
    altura: 167,
    nPe: 37,
    aniver: 12.03
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}