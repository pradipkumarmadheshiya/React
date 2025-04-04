import { useState } from "react"
import ThemeContext from "./ThemeContext"

const ThemeProvider=({children})=>{

    const [theme, setTheme]=useState("Light")

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==="Light" ? prevTheme="Dark" : "Light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider