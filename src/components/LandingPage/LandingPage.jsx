import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
            <article id="iPhone-article">
                <h1>iPhone 15 Pro</h1>
                <h2>Our most powerful camera yet.</h2>
                <h2>Ultrafast chips. And USB-C.</h2>
                <div className="button-box">
                <Link to={"/detail/15/"} className='buy-button'>Buy</Link>
                </div>
                <img id="iPhone-img" src="img/iPhone-pro.jpg" alt="iPhone 15 Pro" />
            </article>

            <article id="store-article">
                <h1>Buy Mac or iPad for collage!</h1>
                <img src="img/store.jpeg" alt="Store" />
                <Link to={"/store"} className="shop-button" >Shop</Link>
            </article>

            <article id="iPad-article">
                <h1>iPad Pro</h1>
                <h2>Unbelievable thin. Incredible powerful.</h2>
                <div className="button-box">
                    <Link className='buy-button' to={"/detail/11/"}>Buy</Link>
                </div>
                    <img src="img/iPad-pro.jpg" alt="iPad Pro" />
            </article>
        </>
    );
}

export default LandingPage;