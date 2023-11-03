import {IProduct} from "../Models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
//export function Product(props: ProductProps) {
//    console.log(props);
    const [details, setDetails] = useState(false);
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border mt-5', btnBgClassName];

    return (
        <div className="border py-3 px-5 flex flex-col items-center mb-2">
            {/*<img src={props.product.image} className="w-1/6" alt={ props.product.title } />*/}
            <img src={ product.image } className="w-1/6" alt={ product.title } />
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }$</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide details' : 'Show details' }
            </button>
            {details && <div className="m-5">
                <p>{ product.description }</p>
                {product.rating && <p>Rate: <span style={{ fontWeight: 'bold' }}>{ product.rating.rate }</span></p>}
            </div>}
        </div>
    )
}