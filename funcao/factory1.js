//Contruindo de modo manual
/*const prod1 = {
    nome: "...",
    preco: 45
}
const prod2 = {
    nome: "...",
    preco: 50
}*/
// Para resolver esse problema, temos que criar uma função factory (fabrica) fabricar uma estancia de uma função

//Factory Simples
function criarPessoa () {
    return {
        nome: 'Luisa',
        sobreNome:'Ducatti'
    }
}
console.log(criarPessoa())