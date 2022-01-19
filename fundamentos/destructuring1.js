// novo recurso do ES2015 (ecmascripth)

const pessoa = {
    nome: 'Luisa',
    idade: 23,
    endereco: {
        logradouro: 'Venâncio Aires',
        numero: 1000
    }
}

console.log(pessoa)

const { nome, idade } = pessoa // const e logo o { } SERVE para destructuring APENAS PARA VISIBILIZAR a const atribuida
console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa // Estraiu o atributo apartir do {DESTRUCTURING} = Atribuido a = Const inicia PESSOA
console.log(n, i) // atribuio valor  nom nome: e crou dinamico co n

const { sobreNome, bemHumorada = true } = pessoa
console.log(sobreNome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // Extração de dentro do bloco { endereco: {logradou.., ..., } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num, } } = pessoa
console.log(ag, num)