import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Calculator from './components/Calculator.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/Counter' element={<Counter/>}></Route>
        <Route path='/Calculator' element={<Calculator/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
