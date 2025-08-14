import { createContext, useEffect, useState } from "react";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then(data=>setProducts(data.products))
        .catch(error=>console.log("err", error))
    }, [])

    return (
        <AppContext.Provider value={{products, setProducts}}>
            {children}
        </AppContext.Provider>
    )
}