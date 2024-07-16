import { useEffect, useState } from "react";
import { getAppleProducts, getProductsByCategory } from '../../data/asyncMockProducts';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("List of products: ");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            if (!category) {
                try {
                    const productsList = await getAppleProducts();
                    setItems(productsList);
                    setSectionTitle('List of products');
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
                    setSectionTitle(category);
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
                    <h2 className="section-title">{sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1)}</h2>
                    <ItemList items={items} />
                </>
            )}
        </div>
    );
}

export default ItemListContainer;