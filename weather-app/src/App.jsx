import React from 'react'
import Home from './Home'
import WeatherDetails from './WeatherDetails'
import { Routes, Route, NavLink} from "react-router-dom"

const App = () => {
  
  return (
    <div>
      <nav>
        <NavLink to={"/"} className="p-4 underline text-gray-600">Home</NavLink>
      </nav>
      <h2 className='text-lg mt-4 ml-4 font-medium'>Weather App</h2>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather/:city' element={<WeatherDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
