console.log(soma(3, 4))
// console.log(sub(3, 4)) // ou seja
//console.log(mult(3, 4)) // tbm não lê, pela posição no código

// function declaration //Nesta declaração ele lê antes de processar
function soma(x, y) {
    return x + y
}

// function expression (Forma mais Usada)
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) //Agora ele chama pela posição do arq. no código

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
