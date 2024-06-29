import ItemList from "../components/ItemList/ItemList";
import "./Content.css"

const Content = () => {

    return (
        <main>
            <section id="products-section">
                <article id="iPhone-article">
                    <h1>iPhone 15 Pro</h1>
                    <h2>Our most powerful camera yet.</h2>
                    <h2>Ultrafast chips. And USB-C.</h2>
                    <div className="button-box">
                        <button className="learn-more-button">Learn More</button>
                        <button className="buy-button">Buy</button>
                    </div>
                    <img id="iPhone-img" src="img/iPhone-pro.jpg" alt="iPhone 15 Pro" />
                </article>

                <article id="store-article">
                    <h1>Buy Mac or iPad for collage!</h1>
                    <img src="img/store.jpeg" alt="Store" />
                    <button className="shop-button">Shop</button>
                </article>

                <article id="iPad-article">
                    <h1>iPad Pro</h1>
                    <h2>Unbelievable thin. Incredible powerful.</h2>
                    <div className="button-box">
                        <button className="learn-more-button">Learn More</button>
                        <button className="buy-button">Buy</button>
                    </div>
                        <img src="img/iPad-pro.jpg" alt="iPad Pro" />
                </article>
            </section>

            <section id="categories-section">
                <h1>Categories:</h1>
                <ItemList arrayProducts={[]} category="Mac" />
                <ItemList arrayProducts={[]} category="iPad" />
                <ItemList arrayProducts={[]} category="iPhone" />
                <ItemList arrayProducts={[]} category="AirPods" />
                <ItemList arrayProducts={[]} category="Accessories" />
            </section>
        </main>
    );
}

export default Content;