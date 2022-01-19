const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!!'
const template = `
    olá
    ${nome}`

console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) // chamando expressão dentro de uma Templete String `` `` `` famoso Craze
