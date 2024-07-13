import "./CartWidget.css"
import "../NavBar/NavBar.css"
import { useState } from "react"
import { Link } from "react-router-dom";

const Cart = () => {

    const [count, setCount] = useState(11);
    
    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div id="cart-logo-container">
            <li>
                <Link to="/cart"><i className="bi bi-cart"></i></Link>
                <span className="notification"> { count }  </span>
            </li>
        </div>
    );
}

export default Cart;