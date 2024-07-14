import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {

    return (

        <footer>
            <h5 className="footer-title">Shop And Discover</h5>
            <div className="footer-navbar">
                <nav>
                    <ul className="footer-links-list">
                        <li>
                            <Link to={"/"}><i className="bi bi-apple"></i></Link>
                        </li>
                        <li>
                            <Link to={"/store"}>Store</Link>
                        </li>
                        <li>
                            <Link to={"/category/mac"}>Mac</Link>
                        </li>
                        <li>
                            <Link to={"/category/ipad"}>iPad</Link>
                        </li>
                        <li>
                            <Link to={"/category/iphone"}>iPhone</Link>
                        </li>
                        <li>
                            <Link to={"/category/vision"}>Vision</Link>
                        </li>
                        <li>
                            <Link to={"/category/accessories"}>Accessories</Link>
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