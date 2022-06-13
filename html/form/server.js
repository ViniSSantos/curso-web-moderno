const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => { //Requisição middleware "sem next".
    console.log(req.body)
    resp.send('<h1>Parabéns usuario enviado!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => { //Requisição middleware "sem next"./ Para saber id, usa o /":"id.
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns usuario alterado!!!</h1>')
})

app.listen(3003)