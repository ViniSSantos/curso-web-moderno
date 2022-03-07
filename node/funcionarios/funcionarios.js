//Função básica de Get API.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios é um claint HTTP, ele faz requisições p/ obter informações do que está remoto.

const chineses = f => f.pais === 'China' // Isso retorna true, por isso posso passar para o .Filter 
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => { //A funç. reduce usa dois parametrosqui o acumulador  é um funcionario, e funcionario
    return func.salario < funcAtual ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);

    // mulher chinesa com menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})

/* 
Aqui tivemos um cenário bem mais real onde apresenta-se:

Uma pasta, o package.json, instalamos uma dependência "Axios",
Acessamos um json remoto, poderia ser um webService.
*/
