import { Link } from "react-router-dom";
import Cart from "../cartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <Link to="/"><i className="bi bi-apple"></i></Link>
                </li>
                <li>
                    <Link to={"/store"}> Store </Link>
                </li>
                <li>
                    <Link to={"/category/mac"}> Mac </Link>
                </li>
                <li>
                    <Link to={"/category/ipad"}> iPad </Link>
                </li>
                <li>
                    <Link to={"/category/iphone"}> iPhone </Link>
                </li>
                <li>
                    <Link to={"/category/airpods"}> AirPods </Link>
                </li>
                <li>
                    <Link to={"/category/vision"}> Vision </Link>
                </li>
                <li>
                    <Link to={"/category/accessories"}> Accessories </Link>
                </li>
                <Cart />
            </ul>
        </nav>
    );
}

export default NavBar;