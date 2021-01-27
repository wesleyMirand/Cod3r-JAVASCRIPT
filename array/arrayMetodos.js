const pilotos = ['Wesley', 'Kalil', 'Fabio', 'Bruno']
pilotos.pop() // bruno quebrou o carro denovo!
console.log(pilotos)

pilotos.push('RicardoPaiDoRi')
console.log(pilotos)

pilotos.shift() // remover o primeiro da lista no caso eu!
console.log(pilotos)

pilotos.unshift('LeoPrimo')
console.log(pilotos)

//splice usamos pra adicionar e remover elemento array!

//adicionar elemento PIloto:
pilotos.splice(2, 0, 'WesleyBrian', 'BrunoTaxi')
console.log(pilotos)

//remover elemento PILoto:
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)