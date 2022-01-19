function pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++ // Neste caso this.idade = Não apontou para pessoa pois tem outra funçaõ disparando ele
        console.log(this.idade)
    }, 1000)
}
new pessoa

//Ctrl + Alt + N = Executar
//Crtl + Alt + M = Parar Execução

function pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++ 
        console.log(this.idade)
    }.bind(this), 1000) // Neste caso usamos o " .bind(this)" para atrelar function pessoa
}
new pessoa2


function pessoa3() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++ 
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Neste caso criamos uma const e atribuimos uma o this a ele
}
new pessoa3
