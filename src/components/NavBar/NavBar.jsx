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
                    <Link to={"/mac"}> Mac </Link>
                </li>
                <li>
                    <Link to={"/iPad"}> iPad </Link>
                </li>
                <li>
                    <Link to={"/iPhone"}> iPhone </Link>
                </li>
                <li>
                    <Link to={"/airpods"}> AirPods </Link>
                </li>
                <li>
                    <Link to={"/vision"}> Vision </Link>
                </li>
                <li>
                    <Link to={"/accessories"}> Accessories </Link>
                </li>
                <Cart />
            </ul>
        </nav>
    );
}

export default NavBar;