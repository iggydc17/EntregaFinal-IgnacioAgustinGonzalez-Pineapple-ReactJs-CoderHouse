import { useEffect, useState } from "react";
import { getProductsById } from "../../data/asyncMockProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await getProductsById(Number(id)); // Asegúrate de que el id sea un número
                if (response.length > 0) {
                    setProduct(response[0]); // Asumiendo que getProductsById devuelve un array
                } else {
                    setFetchError("Producto no encontrado");
                }
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message || "Error al obtener el producto");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductById();
    }, [id]);

    return (
        <div>
            {isLoading && <p className="loading">Loading detail product...</p>}
            {fetchError && <p className="fetch-error" style={{ color: 'tomato' }}> {fetchError}</p>}
            {!fetchError && !isLoading && (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
}

export default ItemDetailContainer;