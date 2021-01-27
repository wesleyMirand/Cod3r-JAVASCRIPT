const quaseArray = {0: 'Wesley', 1: 'Roberta', 2: 'Jaqueline'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
  value : function() { return Object.values (this) },
  enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Wesley', 'Roberta', 'Jaqueline']
console.log(quaseArray.toString(), meuArray) 