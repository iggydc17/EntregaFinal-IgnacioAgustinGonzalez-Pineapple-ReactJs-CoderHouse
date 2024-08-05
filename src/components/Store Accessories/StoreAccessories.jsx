import StoreAccessoriesCards from "../Store Accessories Cards/StoreAccessoriesCards";
import { useNotification } from '../../hooks/useNotification';
import { useAsync } from '../../hooks/useAsync';
import { getProducts } from "../../libraries/firestore/products";

import './StoreAccessories.css';

const StoreAccessories = () => {

    const { setNotification } = useNotification();
    const category = "accessories";
    const asyncFunction = () => getProducts(category);

    const {data: accessories, isLoading, fetchError} = useAsync(asyncFunction);

    if (isLoading) {
        return <p className="is-loading">Loading PineApple accessory products...</p>;
    }

    if (fetchError) {
        setNotification("danger", { message: fetchError.message || 'An error occurred fetching the accessories products' });
        return <p className='fetch-error'>Error: {fetchError}</p>;
    }


    return (
        <div className="accessories-container">
            <h1 className="accessories-section-title">
                Accessories.&nbsp;
                <span className="span-title"> 
                    Essentials that pair perfectly with your favorite devices.
                </span>
            </h1>
            <StoreAccessoriesCards accessories={accessories} />
        </div>
    );
}

export default StoreAccessories;