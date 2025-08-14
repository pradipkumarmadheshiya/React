import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";

const Home = () => {
  const { products } = useContext(AppContext);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  let filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  if (sort === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  if (products.length === 0) return <p className="mt-4 ml-4">Loading...</p>;

  return (
    <div className="ml-4 mt-4">
      <div className="flex justify-between mr-4">
        <h2 className="text-gray-500">Products {filteredProducts.length}</h2>
        <div>
          <select
            value={filter}
            className="bg-gray-500 text-white rounded px-2 py-1 mr-4"
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter by</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-500 text-white rounded px-2 py-1"
            name="sort"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High To Low</option>
          </select>
        </div>
      </div>
      <div className="mt-2 mr-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
