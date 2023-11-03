// USING TSX
//import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import {ProductPage} from './pages/ProductPage'
import {AboutPage} from './pages/AboutPage'

// USING JSX
//import React, {createElement as e, useState} from 'react'
//import logo from './logo.svg';
//import './App.css';
import {Product} from './components/Product'
//import {products} from './data/products'
import axios from "axios";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {IProduct} from "./Models";
import {ModalContext} from "./context/ModalContext";
import {Navigation} from "./components/Navigation";
//import {AxiosError} from "axios";
//import {IProduct} from "./Models";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={ <ProductPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
            </Routes>
        </>
    )

  //  const {modal, open, close} = useContext(ModalContext)
  // const [products, setProducts] = useState<IProduct[]>([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  // async function fetchProducts() {
  //   setError('')
  //   try {
  //     setLoading(true)
  //     const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
  //     setProducts(response.data);
  //     setLoading(false)
  //   } catch(e: unknown) {
  //     const error = e as AxiosError
  //     setLoading(false)
  //     setError(error.message)
  //   }
  //   //console.log(response);
  // }
  //
  // useEffect(() => {
  //   fetchProducts();
  // }, [])
  // const { products, loading, error, addProduct } = useProducts()
  //
  // const createHandler = (product: IProduct) => {
  //     close()
  //     addProduct(product)
  // }
  // USING TSX
  //return (
      // <div className="container mx-auto max-w-2xl pt-5">
      //     { loading && <Loader/> }
      //     { error != '' && <ErrorMessage error={error}/> }
      //     { products.map(product => <Product product={ product } key={ product.id } />) }
      //
      //     {modal && <Modal title="Create new product" onClose={() => close()}>
      //         <CreateProduct onCreate={(product) => createHandler(product)}/>
      //     </Modal>}
      //
      //     <button
      //         className="rounded-full bg-red-700 fixed right-7 bottom-7 text-white p-7 w-24 h-24 text-3xl"
      //         onClick={open}
      //     >
      //         +
      //     </button>
      //
      // </div>
      // USING TSX
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <h1>Hello React!</h1>
      // </div>
  //);

  //return React.createElement('h1', {}, 'Hello Java Script!')
  // USING JSX
  // const [count, setCount] = useState(0);
  //
  // return e('div', {className: 'container'}, [
  //     e('h1', {className: 'font-bold', key: 1}, `Hello JS! You clicked ${count} times!` ),
  //     e('button', {
  //         className: 'py-2 px-4 border',
  //         key: 2,
  //         //onClick: () => console.log('Clicked!')
  //         onClick: () => setCount(count + 1)
  //     }, 'click me')
  // ])
}

export default App;
