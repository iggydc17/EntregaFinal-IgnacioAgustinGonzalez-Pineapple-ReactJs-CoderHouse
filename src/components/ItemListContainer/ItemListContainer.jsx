import ItemList from "../ItemList/ItemList";
import CategoriesVideosList from "../CategoriesVideosList/CategoriesVideosList";
import CategorySubtitlesList from "../CategorySubtitlesList/CategorySubtitlesList";
import { useParams } from "react-router-dom";
import { useNotification } from '../../hooks/useNotification';
import { getProducts, getVideos } from "../../libraries/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const { category } = useParams();
    const { setNotification } = useNotification();

    const asyncFunction = async () => {
        try {
            const [items, videos] = await Promise.all([
                getProducts(category),
                getVideos(category)
            ]);
            return { items, videos, subtitles: videos };
        } catch (error) {
            return { error };
        }
    };

    const { data: { items, videos, subtitles } = {}, isLoading, fetchError } = useAsync(asyncFunction, [category]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (isLoading) {
        return <p className="is-loading">Loading PineApple products...</p>;
        
    }

    if (fetchError) {
        setNotification("danger", { message: fetchError.message || 'An error occurred fetching products' });
        return (
            <p className="fetch-error">Error: {fetchError}</p>
        );
    }

    return (
        <main className="item-list-container">
            <div className="section-titles-container">
                <h1 className="section-title">{capitalizeFirstLetter(category)}</h1>
                <CategorySubtitlesList subtitles={subtitles} />
            </div>
            <CategoriesVideosList videos={videos} />
            <div className="item-list-cards-container">
                <h1 className="lineup-title">Explore the Lineup.</h1>
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;