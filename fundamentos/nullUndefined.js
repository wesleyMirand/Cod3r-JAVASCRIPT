let valor  
console.log(valor)

valor = null
console.log(valor)
console.log(valor.toString()) //erro

const produto ={}
console.log(produto.preco)
console(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)