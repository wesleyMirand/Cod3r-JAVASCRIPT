class lancamento {
  constructor(nome = 'Generico', valor = 100){
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor (mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario (){
    let valorConsolidado = 0
    this.lancamentos.forEach (l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}