{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // a variavel var é lida dentro e fora de um escopo. por ser VAR

// Não criar variaveis global
function teste(){
    var local = 123
    console.log(local)
}

//Ou cria uma Var Global ou cria uma Var no escopo de função

teste()
// console.log(local) // ele só imprimi dentro do ESCOPO da Função do determinado bloco

