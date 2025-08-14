import { createContext, useState } from "react";

export const WeatherContext=createContext()

export const WeatherContextProvider=({children})=>{
    const [city, setCity]=useState("")

    return(
        <WeatherContext.Provider value={{city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}