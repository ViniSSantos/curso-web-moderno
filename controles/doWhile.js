function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçâo escolhida foi ${opcao}.`) // usa aspas deitada " `` " para chamar variavel dentro da string
} while (opcao != -1)

console.log('BINGOOO!!!')
