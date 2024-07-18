import ItemList from "../ItemList/ItemList";
import CategoriesVideosList from "../CategoriesVideosList/CategoriesVideosList";
import { getAppleProducts } from '../../data/asyncMockProducts';
import { getCategoriesVideos } from "../../data/asyncMockCategoriesVideos";
import { useEffect, useState } from "react";
import './ItemListContainer.css';

const ItemListContainer = ({ category }) => {

    const [items, setItems] = useState([]);
    const [videos, setVideos] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const productsList = await getAppleProducts();
                const filteredProducts = category ? productsList.filter(product => product.category === category) : productsList;
                const categoryVideos = await getCategoriesVideos(category);
                setItems(filteredProducts);
                setVideos(categoryVideos);
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);


    return (
        <div className="item-list-container">
            {isLoading && <p className="loading">Loading list of products...</p>}
            {fetchError && <p className="fetch-error" style={{ color:'tomato' }}>{fetchError}</p>}
            {!fetchError && !isLoading && (
                <>
                    <CategoriesVideosList videos={videos} />
                    <h1 className="lineup-title">Explore the Lineup.</h1>
                    <ItemList items={items} />
                </>
            )}
        </div>
    );
}

export default ItemListContainer;