import React, { useState } from "react"

function CountryFinder(){
    const [data, setData]=useState("")

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
    fetchData()

    return(
        <div className="container">
            <h2>Country Finder</h2>
            <div className="box">
                    {
                        // data.forEach((item)=>{
                            <div className="card">
                                <div className="image">
                                    <img src={data[0]?.flags?.png} alt="" />
                                </div>
                                <h3>{data[0]?.name?.common}</h3>
                                <p>Population: {data[0]?.population}</p>
                                <p>Region: {data[0]?.region}</p>
                                <p>Capital: {data[0]?.capital}</p>
                                <button>More details</button>
                            </div>
                        // })
                    }
            </div>
        </div>
    )
}
export default CountryFinder