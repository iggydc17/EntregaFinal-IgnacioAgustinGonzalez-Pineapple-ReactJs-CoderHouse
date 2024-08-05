import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useNotification } from "../../hooks/useNotification";
import { useAsync } from '../../hooks/useAsync';
import { getProductById } from "../../libraries/firestore/products";
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

    const { setNotification } = useNotification();
    const { id } = useParams();
    const asyncFunction = () => getProductById(id);

    const {data: product, isLoading, fetchError} = useAsync(asyncFunction, [id]);


    if (isLoading) {
        return <p className="is-loading">Loading PineApple detail product...</p>;
    }

    if (fetchError) {
        setNotification("danger", { message: fetchError.message || 'An error occurred fetching the detail product' });
        return <p className='fetch-error'>Error: {fetchError}</p>;
    }


    return (
        <div className="item-detail-container">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;