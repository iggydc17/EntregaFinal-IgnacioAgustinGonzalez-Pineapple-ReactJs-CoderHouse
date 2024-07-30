import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libraries/firebase";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, "pineappleProducts", id))
            .then((querySnapshot) => {
                const product = {
                    id: querySnapshot.id, 
                    ...querySnapshot.data()
                }

                setProduct(product);
            })
            .catch((err) => setFetchError(err))
            .finally(() => {
                setIsLoading(false);
            });

    }, [id]);

    return (
        <div className="item-detail-container">
            {isLoading && <p className="loading">Loading detail product...</p>}
            {fetchError && <p className="fetch-error" style={{ color: 'tomato' }}> {fetchError}</p>}
            {!fetchError && !isLoading && (
                <>
                    <ItemDetail {...product} />
                </>
            )}
        </div>
    );
}

export default ItemDetailContainer;