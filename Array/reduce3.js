Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = 1; i < this.length; i++) { // Formula para que o "for" percorra todo o Array.
        acumulador = callback(acumulador, this[i], i, this) // 1. Acumulador, 2. Elemento atual, 3. Indice 4. Array atual.
    } // o resultado da callback passa para o acumulador, para retornar a callback.
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))
