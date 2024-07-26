import LatestProductsListContainer from '../LatestProductsListContainer/LatestProductsListContainer';
import StoreAccessories from '../Store Accessories/StoreAccessories';
import StoreCategoriesContainer from '../StoreCategoriesContainer/StoreCategoriesContainer';
import './Store.css';

const Store = () => {

    document.title = "PineApple Store";

    return (
        <main className='main-store'>
            <StoreCategoriesContainer />
            <LatestProductsListContainer />
            <StoreAccessories />
        </main>
    );
}

export default Store;