function teste1(num) {
    if(num > 7) // nesse exemplo mostra que aqui deveria ter um {} para agrupar os consoles.
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //Não use ";" com as estruturas de controle como o bloco "If"
        console.log(num)
    }
}

teste2(6)
teste2(8)