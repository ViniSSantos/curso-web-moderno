//Criamos uma função que recebe um argumento variavel function(...), onde poderá receber varios outros
module.exports = function(...nomes) {
    return nomes.map(nome => `God Vibreation ${nome}`)
}
