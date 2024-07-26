import { NavLink } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <NavLink to="/"><i className="bi bi-apple"></i></NavLink>
                </li>
                <li>
                    <NavLink to={"/store"}> Store </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/mac"}> Mac </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/ipad"}> iPad </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/iphone"}> iPhone </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/airpods"}> AirPods </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/vision"}> Vision </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/accessories"}> Accessories </NavLink>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}

export default NavBar;