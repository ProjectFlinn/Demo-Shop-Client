import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import "./StorePage.scss";

const StorePage = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isError) {
    return <p>Oops! Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='StorePage'>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default StorePage;
