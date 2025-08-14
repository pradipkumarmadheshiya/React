import { useNavigate } from "react-router-dom"

const ProductCard = ({product}) => {
    const navigate=useNavigate()

  return (
    <div className="border border-gray-200 p-2 rounded-lg">
      <h3 className="text-lg font-medium">{product.title}</h3>
      <p className="text-gray-500">{product.description}</p>
      <img className="w-full" src={product.images[0]} alt="Product Image" />
      <div className="flex justify-between">
        <p>Price: ${product.price}</p>
        <button onClick={()=>navigate(`/product/${product.id}`)}
        className="bg-gray-500 text-white px-2 py-1 rounded cursor-pointer">View Details</button>
      </div>
    </div>
  )
}

export default ProductCard
