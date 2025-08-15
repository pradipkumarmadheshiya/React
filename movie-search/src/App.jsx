import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import MovieDetails from './MovieDetails'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" className='mt-4 ml-4 text gray-600 underline'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:title' element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
