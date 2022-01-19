const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(6.9)
imprimirResultado('Epa') // O JS é uma linguagem fracamente tipada, deveria dar erro mas ele transforma em False e traz "Reprovado" CUIDADO!!