import { useEffect, useState } from "react"
import {Link, useSearchParams} from "react-router-dom"
import "./Products.css"

const Products=()=>{
    const [products, setProducts]=useState([])
    const [totalPages, setTotalPages]=useState(1)
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)
    const [searchParams, setSearchParams]=useSearchParams()

    const page=searchParams.get("page") || "1"
    const limit=searchParams.get("limit") || "40"
    const sort=searchParams.get("sort") || "price"
    const order=searchParams.get("order") || "asc"
    const filter=searchParams.get("filter") || ""

    const fetchData=async ()=>{
        
        setLoading(true)

        try{
            const params=new URLSearchParams({
                page,
                limit,
                sort,
                order,
                ...(filter && {filter})
            })

            const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?${params}`)

            if(!res.ok){
                throw new Error("Network response was not ok")
            }
            const data=await res.json()
            setProducts(data.data)
            setTotalPages(data.totalPages)
        }
        catch(err){
            setError(true)
            console.log("error is:", err)
        }
        finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[searchParams])

    const handleFilter=(e)=>{
        const value=e.target.value
        setSearchParams({filter:value, page:1})
    }

    return(
        <div>
            <h2>Products Page</h2>

            <div>
                <select onChange={handleFilter} value={filter}>
                    <option value="">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                    <option value="homedecor">Home Decore</option>
                </select>
            </div>

            {loading && <p>Loading products...</p>}
            {error && <p>Something went wrong</p>}

            <div className="productsBox">
                {
                    products.map((product)=>(
                        <div key={product.id}>
                            <h3>Brand: {product.brand}</h3>
                            <p>Title: {product.title}</p>
                            <div><img src={product.image} alt="" /></div>
                            <p>Category: {product.category}</p>
                            <p>Price: {product.price}</p>
                            <Link to={`/products/${product.id}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>
            <div className="paginationBox">
                <button disabled={page<=1} onClick={()=>setSearchParams({page:Number(page)-1})}>Prev</button>
                {
                    Array.from({length:totalPages}, (_,i)=>(
                        <button key={i+1} onClick={()=>setSearchParams({page:i+1})}>{i+1}</button>
                    ))
                }
                <button disabled={page>=totalPages} onClick={()=>setSearchParams({page:Number(page)+1})}>Next</button>
            </div>
        </div>
    )
}
export default Products