// Obs.: Entenda os Rutimes e Fuja do escobo Global
let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.expots === this)
console.log(module.exports)

//module.exports = {f: 456, g: false, h: 'testo' }
//console.log(module.exports)

// criando uma vaiavel maluca: sem var e Let = Em um escopo de objeto global di node
abc = 3 // Ex do que não fazer!!
console.log(global.abc)