import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

let el = document.getElementById('app')
if (!el) {
  el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
}
render(React.createElement(App), el)
