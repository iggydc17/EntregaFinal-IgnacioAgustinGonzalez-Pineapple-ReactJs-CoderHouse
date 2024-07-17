import { useEffect, useState } from "react";
import { getProductsById } from "../../data/asyncMockProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await getProductsById(Number(id));
                if (response.length > 0) {
                    setProduct(response[0]); 
                } else {
                    setFetchError("Product not found.");
                }
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message || "Error when obtaining the product");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductById();
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