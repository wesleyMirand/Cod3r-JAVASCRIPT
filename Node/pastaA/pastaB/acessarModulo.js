const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require ('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola)

const http = require ('http')
http.createServer((req, res) => {
  res.write('Bomdia!')
  res.end()
}).listen(8080)