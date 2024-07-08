import CategoryList from "../CategoryList/CategoryList";
import './CategoryListContainer.css';
import { getAppleCategories } from "../../data/asyncMockCategories";
import { useEffect, useState } from "react";


const CategoryListContainer = () => {

    const [categories, setCategories] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const fetchingCategories = async () => {
            try {
                const listCategories = await getAppleCategories();
                setCategories(listCategories);
                setFetchError(null);
            }
            catch(error) {
                setFetchError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchingCategories();
    }, []);

    return(
        <div>
            {isLoading && <p className="loading">Loading categories...</p>}
            {fetchError && <p className="fetchError">{`Error: ${fetchError}`}</p>}
            {!fetchError && !isLoading && (
                <>
                    <h1 id="categories-title">Categories</h1>
                    <CategoryList categories={categories} />
                </>
            )}
        </div>
    );
}

export default CategoryListContainer;