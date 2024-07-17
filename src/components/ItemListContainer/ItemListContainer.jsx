import ItemList from "../ItemList/ItemList";
import CategoriesVideosList from "../CategoriesVideosList/CategoriesVideosList";
import { getAppleProducts, getProductsByCategory } from '../../data/asyncMockProducts';
import { getCategoriesVideos } from "../../data/asyncMockCategoriesVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("List of products: ");
    const [videos, setVideos] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (!category) {
                try {
                    const productsList = await getAppleProducts();
                    setItems(productsList);
                    setSectionTitle('List of products');
                    setFetchError(null);
                }
                catch(error) {
                    setFetchError(error.message);
                }
                finally {
                    setIsLoading(false);
                }    
            }
            else {
                try {
                    const categoryList = await getProductsByCategory(category);
                    const categoryVideos = await getCategoriesVideos(category);
                    setItems(categoryList);
                    setSectionTitle(category);
                    setVideos(categoryVideos);
                    setFetchError(null);
                }
                catch(error) {
                    setFetchError(error.message);
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
                    <CategoriesVideosList videos={videos} />
                    <ItemList items={items} />
                </>
            )}
        </div>
    );
}

export default ItemListContainer;