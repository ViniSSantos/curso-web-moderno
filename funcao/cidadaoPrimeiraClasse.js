// função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3)) // Array=indice 0 (2 e 3)

//Armazenar em um aributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'} // Passa os () vazios para de fato envocar a função
console.log(obj.falar())

// Passar função como parametro para outra função
function run(fun) { // RUN "run" = function de EXECUTAR
    fun () // () parenteses para envocar
}
run(function () { console.log('Executando...')})

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)