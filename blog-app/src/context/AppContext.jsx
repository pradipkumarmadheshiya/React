import { createContext, useEffect, useState } from "react";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [searchValue, setSearchValue]=useState("")
    const [data, setData]=useState([])

    async function fetchPosts(){
        const res=await fetch("https://dummyjson.com/posts")
        const data=await res.json()
        setData(data.posts)
    }
    
    useEffect(()=>{
        fetchPosts()
    }, [])

    return(
        <AppContext.Provider value={{searchValue, setSearchValue, data, setData}}>
            {children}
        </AppContext.Provider>
    )
}