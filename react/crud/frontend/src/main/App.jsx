import 'bootstrap/dist/css/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react.router-dom'

import Routes from './Routes'
import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Footer from '../componentes/template/Footer'

export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>

