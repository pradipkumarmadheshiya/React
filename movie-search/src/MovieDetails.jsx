import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const MovieDetails = () => {
    const {movieData}=useContext(AppContext)
    console.log(movieData)
    if (!movieData){
        return <p className='mt-4 ml-4'>Loading...</p>
    }

  return (
    <div>
      <h2 className='mt-4 ml-4 text-gray-600 font-medium text-lg'>Movies {movieData.Search.length}</h2>
      <div className='mt-4 ml-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            movieData.Search.map((movie, idx)=>(
                <div key={idx} className='border border-gray-200 rounded-lg'>
                    <img className='w-full' src={movie.Poster} alt="" />
                    <div className='flex justify-between px-2 mt-2'>
                        <h3 className='font-medium text-lg '>Title: {movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MovieDetails
