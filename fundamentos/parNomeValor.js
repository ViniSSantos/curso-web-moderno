// Par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (Sig: Em qual local fisico do código a variavel foi definida)

function exec() {
    const saudacao = 'Faaaala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos anunhados de pares nome/valor ou identificador/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Eduardo da Silva Peixoto',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)