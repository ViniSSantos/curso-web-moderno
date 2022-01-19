// OPERADOR ARITIMÉTICO É UM "OPERADOR BINÁRIO"
const [a, b, c, d ] = [3, 5, 1, 15]

// sintáxe conhecida com "InFix"
// Ex: Operanto e Operador = d++ = PostFix . que fica depois do operando "FIXADO"
// Ex: Operador e Operando = ++d = PreFix  . que fica antes do operando que é a "VARIÁVEL"
// Ex: Operador entre Operador = var.. op1 + op2 = InFix 
// Ex: Operador Binário -a = Opera em cima de um uníco operando

const soma = a + b + c + d
const subtracao = b - c
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 //Operacao com  % (modulo % 2) Usa para descobr. se é Par ou Impar 0 = Par 1 = ImPar

console.log(soma, subtracao, multiplicacao, -divisao, modulo) //Ex: Operador UNÁRIO com o a Var =  -divisao