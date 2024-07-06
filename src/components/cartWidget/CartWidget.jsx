import "./CartWidget.css"
import "../NavBar/NavBar.css"
import { useState } from "react"

const Cart = () => {

    const [count, setCount] = useState(11);
    
    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div id="cart-logo-container">
            <li>
                <a href="#"><i className="bi bi-cart"></i></a>
                <span className="notification"> { count }  </span>
            </li>
        </div>
    );
}

export default Cart;