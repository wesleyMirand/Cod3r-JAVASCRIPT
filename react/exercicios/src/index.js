import React from 'react'
import ReactDOM from 'react-dom'

import pai from './componentes/pai'
import filho from './componentes/filho'

ReactDOM.render (
  <div>
    <pai nome="Paulo" sobrenome = "silva">
        <filho nome="Pedro" />
        <filho nome="Paulo" /> 
        <filho nome = "Carla" />

    </pai>
  </div>
, document.getElementById('root'))