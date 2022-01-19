const escola = "cod3r"

console.log(escola.charAt(4)) // Chama a casa que vc numerar O 0 Conta = 0,1,3,4... Entendeu!!
console.log(escola.charAt(5)) // Se não tem ele imprime vazio
console.log(escola.charCodeAt(3)) // Código relacionado na tabela UniCod
console.log(escola.indexOf('3')) // Procura se existe o valor na funçao 

console.log(escola.substring(1)) // Imprime do índice numerado em diante
console.log(escola.substring(0, 3)) // Neste caso vai do indice 0 até o 3 MAS sem incluir o 3
console.log('Escola '.concat(escola).concat("!!!")) //Forma de CONCATENAR .concat com um LITERAL (Literal é um dado livre sem armazenar em var, const, etc...)
console.log(escola.replace(3, 'e')) //.replace Usado para SUBSTITUIÇÃO
console.log('Ana,Maria,Jose'.split(",")) // Função de Array separando estrutura

