import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
, document.getElementById('root'));
registerServiceWorker();