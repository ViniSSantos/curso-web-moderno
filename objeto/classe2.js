class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(quem) {
        super('Silva')
        console.log(quem);
    }
}

const filho = new Filho('eu')
console.log(filho)

// uma forma de prototipa a HERANÇA usando a função constructor na classe com objeto.
