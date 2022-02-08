const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
// Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json) // transformando um JSON em Objeto
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco) // Aqui define a função só valores.
console.log(resultado)
