// cadeia de protótipos (prototype chain) = __proto__: var

Object.prototype.attr0 = '0'

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3' }
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    veAtual: 0,
    veMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.veAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing = Sombreamento
}
const volvo = {
    modelo: 'V40', 
    Status() {
        return `${this.modelo}: ${super.status()}` // aqui usamos o " ${super. " para chamar lá no prototype
    }
}

Object.setPrototypeOf(ferrari, carro) // .setPrototypeOf = Estabelece a relação de prtótipo. === a: __proto__ Neste caso "Ferrari" terá como protótipo "carro"
Object. setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())