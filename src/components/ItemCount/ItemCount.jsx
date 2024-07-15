import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ initial = 1, stock }) => {

    const [count, setCount] = useState(initial);


    const decrement = () => {
        if (count > initial) {
            setCount((c) => c - 1);
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount((c) => c + 1);
        }
    }


    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <p className="count-value">{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default ItemCount;