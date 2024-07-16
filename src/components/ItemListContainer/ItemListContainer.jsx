import { useEffect, useState } from "react";
import { getAppleProducts, getProductsByCategory } from '../../data/asyncMockProducts';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            if (!category) {
                try {
                    const productsList = await getAppleProducts();
                    setItems(productsList);
                    setFetchError(null);
                }
                catch(error) {
                    setFetchError(error);
                }
                finally {
                    setIsLoading(false);
                }    
            }
            else {
                try {
                    const categoryList = await getProductsByCategory(category);
                    setItems(categoryList);
                    setFetchError(null);
                }
                catch(error) {
                    setFetchError(error);
                }
                finally {
                    setIsLoading(false);
                }
            }
        }

        fetchData();
    }, [category]);

    return (
        <div className="item-list-container">
            {isLoading && <p className="loading">Loading list of products...</p>}
            {fetchError && <p className="fetch-error" style={{ color:'tomato' }}>{fetchError}</p>}
            {!fetchError && !isLoading && (
                <>
                    <h2 className="section-title">List of products</h2>
                    <ItemList items={items} />
                </>
            )}
        </div>
    );
}

export default ItemListContainer;