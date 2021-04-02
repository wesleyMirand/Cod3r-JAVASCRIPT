function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem 
}

function Barreira (reversa = false) {
  this.elemento = novoElemento ('div', 'Barreira')
  
  const borda = novoElemento('div', 'borda')
  const corpo = novoElemento('div', 'corpo')
  this.elemento.appendChild(reversa ? corpo : borda)
  this.elemento.appendChild(reversa ? borda : corpo) 

  this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira  (true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function PardeBarreiras (altura, abertura, x) {
  this.elemento = novoElemento('div', 'par-de-barreiras')

  this.superior = new Barreira (true)
  this.inferior = new Barreira (false)

  this.elemento.appendChild(this.superior.elemento)
  this.elemento.appendChild(this.inferior.elemento)

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (alturaSuperior)
    const alturaInferior = altura - abertura - alturaSuperior
    this.superior.setAltura (alturaSuperior)
    this.inferior.setAltura(alturaInferior)
  } 

  this.getX = () => parseInt(this.elemento.style.left.split('px') [0]) 
  this.setX = x => this.elemento.style.left = `${x}px`
  this.getLargura = () => this.elemento.clientWidth

  this.sortearAbertura()
  this.setX(x)
}

const b = new PardeBarreiras(700, 200,  800)
document.querySelector('[wm-flappy').appendChild(b.elemento)