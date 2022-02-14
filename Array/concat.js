const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos, 'Ciclano') //.concat = Para "concatenar arrays".
console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // Ele mantém o Array original, apenas concatena com um novo
