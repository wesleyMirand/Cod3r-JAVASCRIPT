function real (partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor= isNaN(valor) ? valor:`R$${valor.toFixed()}`
    resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3 de ${precoParcela}.`)