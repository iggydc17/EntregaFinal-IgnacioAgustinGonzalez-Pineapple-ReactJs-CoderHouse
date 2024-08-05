import StoreCategoriesList from "../StoreCategoriesList/StoreCategoriesList";
import { useNotification } from '../../hooks/useNotification';
import { useAsync } from '../../hooks/useAsync';
import { getStoreCategories } from '../../libraries/firestore/products';

import './StoreCategoriesContainer.css';

const StoreCategoriesContainer = () => {

    const { setNotification } = useNotification();
    const asyncFunction = () => getStoreCategories();

    const {data: categories, isLoading, fetchError} = useAsync(asyncFunction);


    if (isLoading) {
        return <p className="is-loading">Loading Categories</p>;
    }

    if (fetchError) {
        setNotification("danger", { message: fetchError.message || 'An error occurred fetching the categories' });
        return <p className="fetch-error">Error: {fetchError}</p>;
    }

    return (
        <>
            <h1 className="categories-title">
                Store.&nbsp;
                <span className="span-title">
                    The best way to buy the products you love.
                </span> 
            </h1>
            <StoreCategoriesList categories={categories} />
        </>
    );
}

export default StoreCategoriesContainer;