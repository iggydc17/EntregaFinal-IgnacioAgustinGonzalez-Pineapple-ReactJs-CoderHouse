import CategoryListContainer from "../components/CategoryListContainer/CategoryListContainer";
import LandingPage from "../components/LandingPage/LandingPage";
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
        </main>
    );
}

export default Content;