//Getter para LER e o Setter para ALTERAR = o valor de uma variável
const sequencia = {
    _valor: 1, // Convênção  = Está convêncionando aos Dev's que está variavel é pretendida ser de accesso somente INTERNO   
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia._valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

//Aqui usamos o Gatter e Setter para acessao o dado a partir de um critério de identificação

