import React, { useContext } from 'react'
import {AppContext} from "./AppContext"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {movie, setMovie} = useContext(AppContext)
    const navigate=useNavigate()

  return (
    <div className='mt-4 ml-4'>
      <h2 className='mb-2 text-lg font-medium'>Search Movie</h2>
      <div className='flex gap-2'>
        <input value={movie} onChange={(e)=>setMovie(e.target.value)}
        className='px-2 py-1 bg-gray-200' type="text" name="movieName" placeholder='Enter Movie Name' />
        <button onClick={()=>navigate(`/movie/${movie}`)}
        className='bg-gray-500 px-2 py-1 text-white rounded cursor-pointer'>Search</button>
      </div>
    </div>
  )
}

export default Home
