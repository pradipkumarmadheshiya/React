import React from 'react'
import {Route, Routes} from "react-router-dom"
import ProductDetails from './ProductDetails'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
