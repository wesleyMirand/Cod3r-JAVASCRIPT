Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimitResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Quadro de Honra')
  } else if(nota.entre(7, 8.99)) {
    console.log('Aprovado')
  }else if (nota.entre(4, 6.99)){
    console.log('Recuperação') 
  }else if (nota.entre(0, 3.99)) {
    console.log('Reprovado')
  }else {
    console.log('Nota invalida')
  }
}

imprimitResultado(10)
imprimitResultado(8.9)
imprimitResultado(6.55)
imprimitResultado(2.3)
imprimitResultado(-1)
imprimitResultado(11)