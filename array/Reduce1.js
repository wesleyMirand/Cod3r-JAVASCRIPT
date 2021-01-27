const alunos = [
  {nome: 'Bruno', nota: 7.3,  bolsista: false },
  {nome: 'Roberta', nota: 9.3,  bolsista: true },
  {nome: 'Thiago', nota: 9.8,  bolsista: false },
  {nome: 'Wesley', nota: 8.7,  bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)

console.log(resultado)