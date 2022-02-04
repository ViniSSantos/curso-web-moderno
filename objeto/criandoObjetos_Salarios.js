//usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)
console.log(typeof Object, typeof new Object)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //This para torna-lá pública
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionarios(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionarios('João', 7980, 4)
const f2 = criarFuncionarios('Maria', 11400, 29)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)