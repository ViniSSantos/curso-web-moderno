const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasbaixas1 = []
for (let i in notas) {
    if(notas [i] < 7) {
        notasbaixas1.push(notas [i])
    }
}

console.log(notasbaixas1)

// Com callback
const notasbaixas2 = notas.filter(function (nota) { // ".filter" usado para filtrar um array
    return nota < 7
})
console.log(notasbaixas2) // ctrl + D = Seleção de multiplos iguais para edição

// com Arrow function
const notasMenorQue7 = nota => nota < 7
const notasbaixas3 = notas.filter(notasMenorQue7)
console.log(notasbaixas3)