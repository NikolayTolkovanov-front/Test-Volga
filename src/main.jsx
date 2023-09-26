import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './stores/store'
import { Provider } from 'react-redux'
import MyRouterProvider from './components/MyRouterProvider/MyRouterProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRouterProvider />
    </Provider>
  </React.StrictMode>,
)
