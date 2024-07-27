
import { useEffect, useState } from "react";
import StoreCategoriesList from "../StoreCategoriesList/StoreCategoriesList";
import './StoreCategoriesContainer.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const StoreCategoriesContainer = () => {

    const [categories, setCategories] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "storeCategories"));
                const categoriesList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCategories(categoriesList);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (fetchError) {
        return <div>Error: {fetchError}</div>;
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