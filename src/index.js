import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/App'
import { store } from './store'
import './index.css'

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)