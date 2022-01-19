function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { //!= SIG. DIFERENTE
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçâo escolhida foi ${opcao}.`) // usa aspas deitada " `` " para chamar variavel dentro da string
}
console.log('BINGOOO!!!')

// A Wile é propria para usar em laços com qntd infinita de opçoes
// Ela transforma em false eu acho kkkkk