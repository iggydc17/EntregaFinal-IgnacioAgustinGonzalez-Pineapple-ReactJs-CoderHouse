import "./NavBar.css"
import Cart from "../cartWidget/CartWidget"
import { useEffect, useState } from "react";

const NavBar = () => {

    const [category, setCategory] = useState("");

    useEffect(() => {
        
    }, [category]);

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
                    <a href="#">Vision</a>
                </li>
                <Cart />
            </ul>
        </nav>
    );
}

export default NavBar;