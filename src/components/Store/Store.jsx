import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';
import LatestProductsListContainer from '../LatestProductsListContainer/LatestProductsListContainer';
import './Store.css';

const Store = () => {
    return (
        <main className='main-store'>
            <CategoryListContainer />
            <LatestProductsListContainer />
        </main>
    );
}

export default Store;