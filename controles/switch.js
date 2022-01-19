//Switch usado para seleção multíplas
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //math.floor arredonda para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
                break // usamos o "Break" para que ele encerre a leitura, entre e saia do processamento
        case 8:
        case 7:
            console.log('provado')
            break
        case 6: case 5: case 4: // Pode criar varias sentenças nas mesma linha usando o " : ".
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }      
//console.log('Fim') //Por isso separamos por blocos com {CHAVES/OBJETO}
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)