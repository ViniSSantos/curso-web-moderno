const fs = require('fs') //" fs" sig: File Sistem, é um modulo interno que já vem coom o node

const caminho = __dirname + '/arquivo.json' // "__dirname" é uma variável chamada caminho.

//sincrono 
const conteudo = fs.readFileSync(caminho, 'utf-8') // "readFileSync" sig: leia Arquivo (de forma) Sincrona(só após ter acrregado ele todo)
console.log(conteudo)

// assincrono... readFile( passa o caminho, e o Encoding quequero usar, )
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // JSON.parse é para converter o conteúdo
    console.log(`${config.db.host}:${config.db.port}`)
})

// Ao invés de ter o caminho absoluto, como __dirname + o nomeDoArquivo.json, idependente do modulo que eu estiver navegando.

const config = require('./arquivo.json')
console.log(config.db)

// Leitura de uma pasta
// __dirname é uma const do node que representa o diretório atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})
