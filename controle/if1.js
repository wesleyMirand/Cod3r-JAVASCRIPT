function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) 

function seForVerdadeEufal(valor) {
  if(valor) {
    console.log('E verdade...' + valor)
  }
}

seForVerdadeEufal()
seForVerdadeEufal(null)
seForVerdadeEufal(undefined)
seForVerdadeEufal(NaN)
seForVerdadeEufal("")
seForVerdadeEufal(0)
seForVerdadeEufal(-1)
seForVerdadeEufal(' ')
seForVerdadeEufal('?')
seForVerdadeEufal([])
seForVerdadeEufal([1, 2])
seForVerdadeEufal({})