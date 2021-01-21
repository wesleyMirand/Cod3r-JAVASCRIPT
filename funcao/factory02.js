function CriarProduto(nome, preco) {
  return{
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(CriarProduto('Iphone7', 2100.98))
console.log(CriarProduto('Iphone9', 2800.98))
console.log(CriarProduto('Iphone10', 4100.98))
console.log(CriarProduto('Iphone12', 8000.98))