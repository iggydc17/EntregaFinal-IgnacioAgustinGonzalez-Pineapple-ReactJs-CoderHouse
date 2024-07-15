
import { useEffect, useState } from "react";
import StoreCategoriesList from "../StoreCategoriesList/StoreCategoriesList";
import './StoreCategoriesContainer.css';
import { getCategories } from "../../data/asyncMockCategories";

const StoreCategoriesContainer = () => {

    const [categories, setCategories] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response);
                console.log(response)
                setFetchError(null);
            }
            catch(err) {
                setFetchError(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, []);

    return (
        <>
            {isLoading && <p className="loading">Loading categories...</p>}
            {fetchError && <p className="fetch-error">{ fetchError }</p>}
            {!fetchError && !isLoading && (
                <>
                    <h1 className="categories-title">
                        Store.&nbsp;
                        <span className="span-title">
                            The best way to buy the <br /> products you love.
                        </span> 
                    </h1>
                    <StoreCategoriesList categories={categories} />
                </>
            )}
        </>
    );
}

export default StoreCategoriesContainer;