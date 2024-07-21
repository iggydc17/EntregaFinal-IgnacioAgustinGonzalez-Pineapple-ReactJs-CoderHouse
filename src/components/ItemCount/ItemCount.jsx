import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

const ItemCount = ({ initialQuantity = 1, price, stock, onAdd }) => {

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
            <div className="counter-box">
                <button onClick={decrement}>-</button>
                <p className="count-value">{ count }</p>
                <button onClick={increment}>+</button>
            </div>
            <p className="product-stock"> Available stock: {stock}</p>
            <h2 className='total'>Total: ${productPrice.toFixed(1)}</h2>
            
            {stock === 0 ? (
                <p className="sold-out">SOLD OUT</p>
            ) : (
                <Link 
                    to='/#/'
                    onClick={ () => onAdd(count) } 
                    className='add-to-cart-btn'
                > 
                    Add to Cart &nbsp; <i className="bi bi-cart"></i>
                </Link>
            )}
        </div>
    );
}

export default ItemCount;
