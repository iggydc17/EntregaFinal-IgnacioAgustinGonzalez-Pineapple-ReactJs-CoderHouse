import { useAsync } from '../../hooks/useAsync';
import { useNotification } from '../../hooks/useNotification';
import { getLatestProducts } from '../../libraries/firestore/products';
import LatesProductsDetail from '../LatesProductsDetail/LatesProductsDetail';
import './LatestProductsListContainer.css';

const LatestProductsListContainer = () => {

    const { setNotification } = useNotification();
    const asyncFunction = () => getLatestProducts();

    const {data: lastProducts, isLoading, fetchError} = useAsync(asyncFunction);

    if (isLoading) {
        return <p className="is-loading">Loading PineApple latest products...</p>;
    }

    if (fetchError) {
        setNotification("danger", { message: fetchError.message || 'An error occurred fetching the latest products' });
        return <p className='fetch-error'>Error: {fetchError}</p>;
    }

    return (
        <div id="last-products-list-container">
            <h1 className='latest-products-title'>The latest. 
                <span className='span-title'> Take a look at what’s new, right now.</span>
            </h1>
            <LatesProductsDetail lastProducts={lastProducts} />
        </div>
    );
}

export default LatestProductsListContainer;