import React, {useState} from "react";
import {IProduct} from "../Models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}
export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const productData: IProduct = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault()

        if(value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    //const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //    setValue(event.target.value)
    //}

    return (
        <form onSubmit={ submitForm }>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter Product title..."
                value={ value }
                //onChange={ changeHandler }
                onChange={ event => setValue( event.target.value ) }
            />
            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400 hover:text-white"
            >
               Create
            </button>

            {error && <ErrorMessage error={error}/>}
        </form>
    )
}