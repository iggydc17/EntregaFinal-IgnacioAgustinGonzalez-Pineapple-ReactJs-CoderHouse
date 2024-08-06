import './Counter.css';

const Counter = ({ count, increment, decrement }) => {


    return (
        <div className="counter-box">
            <button onClick={decrement}>-</button>
            <p className="count-value">{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;