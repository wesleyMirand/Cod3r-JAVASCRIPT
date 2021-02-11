const primeiroElemento = arrayOustring => arrayOustring[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})  
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
