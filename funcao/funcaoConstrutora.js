function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método público - Se eu usasse let ou const seria algo privado
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro // O operador "New" serve para instanciar função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)
