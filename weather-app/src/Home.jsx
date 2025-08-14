import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WeatherContext } from './WeatherContext'

const Home = () => {
    const navigate=useNavigate()
    const {city, setCity}=useContext(WeatherContext)

  return (
    <div>
        <input type="text" name="city" placeholder='Your city name' 
        value={city} onChange={(e)=>setCity(e.target.value)}
        className='bg-gray-200 px-2 py-1 ml-4 mt-2'
        />
        <button className='bg-gray-600 text-white rounded px-2 py-1'
        onClick={()=>navigate(`/weather/${city}`)}
        >Search</button>
    </div>
  )
}

export default Home
