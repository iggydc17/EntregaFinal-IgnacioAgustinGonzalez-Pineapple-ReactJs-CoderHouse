import "./CartWidget.css"
import "../NavBar/NavBar.css"
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Cart = () => {

    const { totalQuantity } =  useCart();

    return (
        <div id="cart-logo-container">
            <li>
                <NavLink to="/cart"><i className="bi bi-cart"></i></NavLink>
                {totalQuantity > 0 && <span className="notification"> { totalQuantity } </span>}
            </li>
        </div>
    );
}

export default Cart;