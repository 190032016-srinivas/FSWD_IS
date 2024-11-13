import { useState, useEffect } from "react";

const useFetchProducts = (
  setProducts,
  setLoading,
  setError,
  setGlobalProducts
  // https://dummyjson.com/products
  // http://localhost:3000/products
) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setGlobalProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
};

export default useFetchProducts;
