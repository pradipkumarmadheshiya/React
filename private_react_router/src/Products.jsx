import { useEffect, useState } from "react"
import "./Products.css"

const Products=()=>{

    const url="https://fakestoreapi.com/products"
    const [productsData, setProductsData]=useState([])

    useEffect(()=>{
        const displayProductsData=async()=>{
            const res=await fetch(url)
            const data=await res.json()
            setProductsData(data)
        }
        displayProductsData()
    },[])

    return(
        <div>
            <h2>Products page</h2>
            <div className="productsContainer">
                {productsData.map((prod, idx)=>
                    <div key={idx} className="productCard">
                        <p>Title: {prod.title}</p>
                        <img src={prod.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Products