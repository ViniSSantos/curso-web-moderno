let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


isAtivo = 1
console.log(!!isAtivo) // ! sig. Não !! sig. Não Não

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!' ') // intrulso = teste
console.log(!![]) // Ñ Ñ chamando no ARRAY []
console.log(!!{}) // Ñ Ñ chamando no OBEJETO LITERAL {}
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log('Os falsos...')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // SIG || OU barras retas = ou ||

let nome = ''
console.log(nome || 'Desconhecida')
