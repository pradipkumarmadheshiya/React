import React, { useEffect, useState } from "react"

function CountryFinder(){
    const [data, setData]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
            const res=await fetch("https://restcountries.com/v3.1/all")
            const fetchVal=await res.json()
            setData(fetchVal)
        }
        catch(error){
            console.log("error is:", error)
        }
    }
    
    return(
        <div className="container">
            <h2>Country Finder</h2>
            <div className="box">
                    {
                        data.map((item)=>(
                            <div className="card">
                                <div className="image">
                                    <img src={item?.flags?.png} alt="" />
                                </div>
                                <h3>{item?.name?.common}</h3>
                                <p>Population: {item?.population}</p>
                                <p>Region: {item?.region}</p>
                                <p>Capital: {item?.capital}</p>
                                <button>More details</button>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}
export default CountryFinder