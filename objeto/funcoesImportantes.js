// Objeto é feito por CHAVES e VALORES
const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 32,
}
console.log(Object.keys(pessoa))  // o .Keys pega as CHAVES do Objeto aqui são (Nome, Idade, Peso).
console.log(Object.values(pessoa)) // o .Values é usado para pegar os VALORES do Obejeto (Rebeca, 12, 32)
console.log(Object.entries(pessoa)) // Gera arrays com todas as CHAVES e VALOR. PARA LEEERRR o OBJ.

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Enumerable é para ver se ela será listada
    writable: false, // Writable é para autorizar ou não seja passivel de modificações ou pé da letra GRAVAVÉL
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Não modifiqou pq usamos aqui o writable como false
console.log(pessoa.dataNascimento) // Só listou a dataNascimento pq usamos o enumerable como true 
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // .assingn é usado para ATRIBUIR todos ao mesmo local

Object.freeze(obj) // Congelando o obj
obj.c = 123 // Não irá realizar a atribuição
console.log(obj) // esse obj é a concatenação de todos os atributos acima