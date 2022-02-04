// Processo de transformar um objeto em um JSON
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj)) // JSON.stringify() = converte em formato JSON.

// De Objeto para JSON

//console.log(JSON.parse("{a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // JSON.parse = Para transformar um texto JSON em Objeto

/// Todo nome de atributo em JSON deve estra entre aspas duplas.

//Expemplos de elemntos válidos para JSON

console.log(JSON.parse('{ "a": 1.7, "b": "String", "c": true, "d": {}, "e": [] }'))
