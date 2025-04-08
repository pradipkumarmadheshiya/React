import { useEffect, useState } from "react"
import { useParams, } from "react-router-dom"

const ProductDetail=()=>{

    const {id}=useParams()
    const [product, setProduct]=useState(null)
    const [loading, setLoading]=useState(false)

    const fetchProduct=async()=>{
        setLoading(true)
        try{
            const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            if (!res.ok){
                throw new Error("Network error or something error")
            }
            const productData=await res.json()
            setProduct(productData.data)
        }
        catch(err){
            console.log("error is:", err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduct()
    }, [id])

    if(!product) return (<h3>No Product found</h3>)

    return(
        <div>
            {loading && <p>Loading...</p>}
            <p>Name: {product.title}</p>
            <div><img src={product.image} alt="" /></div>
            <p>Price: {product.price}</p>

        </div>
    )
}
export default ProductDetail