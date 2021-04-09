function novoElemento (tagName, className) {
  const elem = document.createElement(tagName)
  elem.className = className
  return elem
}

function Barreira ( reversa = false) {
    this.elemento = novoElemento ('div', 'barreira')

    const borda = novoElemento ('div', 'borda')
    const corpo = novoElemento ('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
}