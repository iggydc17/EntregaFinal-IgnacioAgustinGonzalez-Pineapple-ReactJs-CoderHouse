import { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({ initialQuantity = 1, name, price, stock, onAdd }) => {

    const initialPrice = price;

    const [count, setCount] = useState(initialQuantity);
    const [productPrice, setProductPrice] = useState(initialPrice * initialQuantity);

    const decrement = () => {
        if (count > initialQuantity) {
            setCount((c) => c - 1);
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount((c) => c + 1);
        }
    }

    useEffect(() => {
        setProductPrice(price * count);
    }, [count, price])

    return (
        <div className="counter-container">
            <p className="counter-product-name">{name}</p>
            <p className='free-shipping'>Free Shipping <i className="bi bi-truck"></i></p>
            <p className="product-stock"> Available stock: {stock}</p>
            <div className="counter-box">
                <button onClick={decrement}>-</button>
                <p className="count-value">{ count }</p>
                <button onClick={increment}>+</button>
            </div>
            <h2 className='total'>Total: ${productPrice.toFixed(1)}</h2>
            
            {stock === 0 ? (
                <p className="sold-out">SOLD OUT</p>
            ) : (
                <button 
                    onClick={ () => onAdd(count) } 
                    className='add-to-cart-btn'
                > 
                    Add to Cart &nbsp; <i className="bi bi-cart"></i>
                </button>
            )}
        </div>
    );
}

export default ItemCount;
