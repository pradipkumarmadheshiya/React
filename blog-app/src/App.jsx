import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from "./components/Navbar"
import PostDetails from './pages/PostDetails'

const App = () => {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/post/:id' element={<PostDetails/>}/>
        </Routes>
      </div>
  )
}

export default App