import { useState, useEffect } from "react";
// unused hook
const useFetchProductDetails = (setProduct, setLoading, setError, target) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        for (let product of data.products) {
          if (product.title == target) {
            setProduct(product);
            break;
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
};

export default useFetchProductDetails;
