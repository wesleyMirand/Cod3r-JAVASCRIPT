import React from 'react'
import './Button.css'

export default props => {
  let classes = 'button '
  classes += props.operation ? 'operation' : ''
  classes += props.double ? 'operation' : ''
  classes += props.triple ? 'operation' : ''

  return (
  <button 
    onClick = { e => props.click (props.label)}
    className={classes}>
    {props.label}
  </button>
  )
}
