import "./CartWidget.css"
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Cart = () => {

    const { totalQuantity } =  useCart();

    return (
        <div id="cart-logo-container">
            <li>
                <Link to="/cart"><i className="bi bi-cart"></i></Link>
                {totalQuantity !== 0 ? (
                    <span className="notification"> { totalQuantity } </span>
                ) : (
                    <span></span>
                )}
            </li>
        </div>
    );
}

export default Cart;