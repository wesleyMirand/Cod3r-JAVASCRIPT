function gerarNumerosEntre(min, max, tempo) {
  if(min > max) [min, max] = [min, max]
  return new Promise(resolve => {
    setTimeout(function() {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) +min
    resolve (aleatorio)
    }, tempo)
  })
}

function gerarVariosNUmeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 5000),
  ])
}

console.time('promise')

gerarVariosNUmeros()
    .then(console.log)
    .then(() => {
console.timeEnd('promise')
    })