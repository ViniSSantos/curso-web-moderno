const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (indice in numeros) {
    if (indice == 5) {
        break
    }
    console.log(`${indice} = ${numeros[indice]}`) //Contagem de indice é apartir do 0.
}

for (y in numeros) {
    if (y ==5) {
        continue
    }
    console.log(`${y} = ${numeros[y]}`) // Usamos aqui o "Templete String = ${}"
}

// Break e Continue causam mudanças de fluxo, um para fora do laço e outro para/pula o indice e continua

externo: for (a in numeros) {
    for (b in numeros) {
        if (a ==2 && b == 3)  break externo
        console.log(`Subindo = ${a},${b}`)
    }
}