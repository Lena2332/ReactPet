import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {useProducts} from "../hooks/products";
import {IProduct} from "../Models";

export function ProductPage(){
    const {modal, open, close} = useContext(ModalContext)
    const { products, loading, error, addProduct } = useProducts()

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader/> }
            { error != '' && <ErrorMessage error={error}/> }
            { products.map(product => <Product product={ product } key={ product.id } />) }

            {modal && <Modal title="Create new product" onClose={() => close()}>
                <CreateProduct onCreate={(product) => createHandler(product)}/>
            </Modal>}

            <button
                className="rounded-full bg-red-700 fixed right-7 bottom-7 text-white p-7 w-24 h-24 text-3xl"
                onClick={open}
            >
                +
            </button>

        </div>
    )
}