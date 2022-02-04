function criarProduto(nome, preco, desconto) {
    return {
        nome,
        preco,
        desconto,
        total: preco - (preco * desconto) 
        
    }
}
console.log(criarProduto('Notbook', 500, 0.1))
console.log(criarProduto('Bala de Goma', 1.5, 0.1))

