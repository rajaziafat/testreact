import { useEffect, useState, useCallback } from "react";
import api from "../api";

const useHome = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  const getAllProducts = useCallback(async()=> {
    setLoading(true);
    const response = await api.get('/products');

    if (response.data.data.length !== 0) {
      setProducts(response.data.data);
      setLoading(false);
    } else {
      setProducts([]);
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);


  return {
    products,
    isLoading
  }
}


export default useHome;