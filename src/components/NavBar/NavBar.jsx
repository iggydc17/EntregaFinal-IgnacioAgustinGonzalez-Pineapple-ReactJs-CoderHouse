import "./NavBar.css"
import Cart from "../cartWidget/CartWidget"

const NavBar = () => {

    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <a href="#"><i className="bi bi-apple"></i></a>
                </li>
                <li>
                    <a href="#">Store</a>
                </li>
                <li>
                    <a href="#">Mac</a>
                </li>
                <li>
                    <a href="#">iPad</a>
                </li>
                <li>
                    <a href="#">iPhone</a>
                </li>
                <li>
                    <a href="#">AirPods</a>
                </li>
                <li>
                    <a href="#">Accessories</a>
                </li>
                <Cart />
            </ul>
        </nav>
    );
}

export default NavBar;