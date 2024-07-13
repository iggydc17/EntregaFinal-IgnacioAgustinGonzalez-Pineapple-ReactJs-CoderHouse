import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {

    return (

        <footer>
            <hr />
            <h5 className="footer-title">Shop And Learn</h5>
            <div className="footer-navbar">
                <nav>
                    <ul className="footer-links-list">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/store"}>Store</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Mac</Link>
                        </li>
                        <li>
                            <Link to={"#"}>iPad</Link>
                        </li>
                        <li>
                            <Link to={"#"}>iPhone</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Vision</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Accessories</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
            <div className="copy-box">
                <p className="copy">&copy; {new Date().getFullYear()} Pineapple Inc. All Rights Reserved</p>
                <p><Link to="#">About Pineapple</Link> | <Link to="#">Contact Us</Link></p>                
            </div>
        </footer>
    );
}

export default Footer