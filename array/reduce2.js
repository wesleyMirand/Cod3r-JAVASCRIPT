const alunos = [
  {nome: 'Bruno', nota: 7.3,  bolsista: false },
  {nome: 'Roberta', nota: 9.3,  bolsista: true },
  {nome: 'Thiago', nota: 9.8,  bolsista: false },
  {nome: 'Wesley', nota: 8.7,  bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))