import { createContext, useEffect, useState } from "react";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [movie, setMovie]=useState("")
    const [movieData, setMovieData]=useState(null)

    useEffect(()=>{
        if (!movie.trim()) return
        fetch(`http://www.omdbapi.com/?apikey=ad611b1e&s=${movie}`)
        .then((res)=>res.json())
        .then((data=>setMovieData(data)))
        .catch(error=>console.log("err", error))
    }, [movie])

    return (
        <AppContext.Provider value={{movie, setMovie, movieData, setMovieData}}>
            {children}
        </AppContext.Provider>
    )
}