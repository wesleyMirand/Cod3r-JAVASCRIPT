//Object.preventExtensions
const produto = Object.preventExtensions ({
  nome:'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes