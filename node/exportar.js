console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    neme: 'João'
}

console.log(module.exports)

module.exports = { publico: true }

// o this e o exports, são só duas referencias para o mesmo objeto que o "module.exports" aponta!