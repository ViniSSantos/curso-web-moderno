// coleção dinâmica de pares chaves/valor
const produto = new Object // new Object = estancia a criação de um novo objeto
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    Marca: 'Audi',
    valor: 89000,
    proprietario:{
        nome: 'Luisa',
        idade: 23,
        endereço:{
            Logradouro: 'Venâncio aires',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Vinicius',
        idade: 23
    }, {
        nome:'Wesley',
        idade: '29'
    }]
}   
function calcularValorSeguro() {
    //...
}
carro.proprietario.endereço.numero = 321
carro['proprietario']['endereço']['logradouro'] = 'Av Beira Mar'

console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)