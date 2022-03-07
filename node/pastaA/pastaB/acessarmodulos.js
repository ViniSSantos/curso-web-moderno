const moduloA = require('../../moduloA')
console.log(moduloA.ateLogo)

const c = require('./pastaC/index')
console.log(c.oi)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)
