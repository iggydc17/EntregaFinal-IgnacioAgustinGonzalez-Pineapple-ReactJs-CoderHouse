import LandingPage from "../components/LandingPage/LandingPage";
import CategoryListContainer from "../components/CategoryListContainer/CategoryListContainer";
import ProductDetailContainer from "../components/ProductDetailContainer/ProductDetailContainer";
import "./Content.css"

const Content = () => {

    return (
        <main>
            <section id="products-section">
                <LandingPage />
            </section>
            <section id="categories-section">
                <CategoryListContainer />
            </section>
            <section id="products-section">
                <ProductDetailContainer /> 
            </section>
        </main>
    );
}

export default Content;