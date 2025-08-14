import { useState } from "react";
import { createContext } from "react";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [user, setUser]=useState({name:"Pradip", email:"prdpmadheshiya@gmail.com"})

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}