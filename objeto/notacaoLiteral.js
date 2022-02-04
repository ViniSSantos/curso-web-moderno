const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} // Mais atual
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // Atribuido uma const com o valor de outra.
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Atribuindo um valor a uma const com outra.
console.log(obj4)

//Mudanças de notação literal. Era baseado em chave : e Valor
// Function Express Chave (funcao1) : function() {} anônima.
const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() { // Definindo função sem os " : " e a expressão function
        //...
    }
}
console.log(obj5)
