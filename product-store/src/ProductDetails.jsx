import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams();

  const product = products.find((product) => product.id == id);

  if (!product) return <p className="ml-4 mt-4">Loading...</p>;

  return (
    <div className="border border-gray-200 p-2 rounded-lg m-4 flex">
      <img className="w-60" src={product?.images[0]} alt="Product Image" />
      <div>
        <h3 className="text-lg font-medium">{product?.title}</h3>
        <p className="text-gray-500">{product?.description}</p>
        <p>Price: ${product?.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
