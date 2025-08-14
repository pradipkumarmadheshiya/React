import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './WeatherContext'

const WeatherDetails = () => {
    const [weatherData, setWeatherData]=useState({})
    const {city}=useContext(WeatherContext)
    const apiKey="947f6a04c9ce2de25f27d713abb269d6"

    useEffect(()=>{
        if(!city) return 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`)
        .then((res)=>res.json())
        .then((data)=>setWeatherData(data))
        .catch(error=>console.log("err", error))
    }, [city])

    if (Object.keys(weatherData).length===0){
        return <p className='ml-4'>Loading...</p>
    }

  return (
    <div className='ml-4 mt-4'>
      <p className='text-gray-500'>Weather in {weatherData.name}</p>
      <p>Temperature: {weatherData.main?.temp}°C</p>
      <p>Humidity: {weatherData.main?.humidity}%</p>
      <p>Weather Condition: {weatherData.weather[0]?.description}</p>
    </div>
  )
}

export default WeatherDetails
