import { appleCategories } from "../../data/asyncMockCategories";
import NavBarButton from "../NavBarButton/NavBarButton";
import Cart from "../cartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <a href="#"><i className="bi bi-apple"></i></a>
                </li>

                {appleCategories.map((category, index) => (
                    <li key={index}>
                        <NavBarButton category={category} />
                    </li>
                ))}
                
                <Cart />
            </ul>
        </nav>
    );
}

export default NavBar;