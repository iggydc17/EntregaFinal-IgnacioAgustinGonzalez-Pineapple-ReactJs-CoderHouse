import ItemList from "../ItemList/ItemList";
import CategoriesVideosList from "../CategoriesVideosList/CategoriesVideosList";
import { useEffect, useState } from "react";
import { db } from '../../services/firebase/index';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import CategorySubtitlesList from "../CategorySubtitlesList/CategorySubtitlesList";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [videos, setVideos] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                // Fetch Products
                const collectionProductsRef = category
                    ? query(collection(db, "pineappleProducts"), where("category", "==", category))
                    : collection(db, "pineappleProducts");

                const querySnapshot = await getDocs(collectionProductsRef);
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setItems(productsList);

                // Fetch Videos
                const collectionCategoriesVideosRef = category
                    ? query(collection(db, "categoriesVideos"), where("category", "==", category))
                    : collection(db, "categoriesVideos");

                const querySnapshotVideos = await getDocs(collectionCategoriesVideosRef);
                const categoriesVideosList = querySnapshotVideos.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                setVideos(categoriesVideosList);

                document.title = `${capitalizeFirstLetter(category)} - PineApple`;

            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (fetchError) {
        return <div>Error: {fetchError}</div>;
    }

    return (
        <div className="item-list-container">
            <div className="section-titles">
                <h1 className="section-title">{capitalizeFirstLetter(category)}</h1>
                <CategorySubtitlesList videos={videos} />
            </div>
            <CategoriesVideosList videos={videos} />
            <div className="item-list-cards-container">
                <h1 className="lineup-title">Explore the Lineup.</h1>
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;