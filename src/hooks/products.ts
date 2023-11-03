import axios, {AxiosError} from "axios";
import {IProduct} from "../Models";
import React, {useEffect, useState} from 'react';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev=> [...prev, product])
    }
    async function fetchProducts() {
      setError('')
      try {
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        setProducts(response.data);
        setLoading(false)
      } catch(e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
      //console.log(response);
    }

    useEffect(() => {
      fetchProducts();
    }, [])

    return { products, loading, error, addProduct }
}