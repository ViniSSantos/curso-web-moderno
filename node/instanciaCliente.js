const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //usamos (), aqui para envocar a função factory
const contadorD = require('.instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)