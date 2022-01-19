// Armazenado uma funçao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Imprimindo uma função Arrow em uma variável ARROW = a igual Maior Que, ou seja, =>      Se trata de uma function
const soma = (a, b) => {
    return a + b    
}

console.log(soma(2, 3))

// retorno implícito (diminuindo mais ainda a SINTAXE)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

// Diminuimos bastanto a Sintaxe usando uma Arrow  Function =. =>