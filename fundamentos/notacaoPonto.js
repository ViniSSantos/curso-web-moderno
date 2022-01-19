console.log(Math.ceil(8.1)) // Ceil é usado para arredondamento pra cima

const obj1 = {}
obj1.nome = 'Bola' // como nomear dinamicamente uma CONST ou variavel - NOTAÇÃO PONTO "obj1.nome"
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Chamar(nome) {
    this.Chamar = nome
    console.log(this.Chamar)
}

const obj2 = new obj1('Cadeira')

console.log(obj2)