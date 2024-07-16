import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../data/asyncMockProducts";
import StoreAccessoriesCards from "../Store Accessories Cards/StoreAccessoriesCards";
import './StoreAccessories.css';

const StoreAccessories = () => {

    const [accessories, setAccessories] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await getProductsByCategory("accessories");
                setAccessories(response);
                setFetchError(null);
            }
            catch(error) {
                setFetchError(error);
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchAccessories();
    }, []);

    return (
        <div className="accessories-container">
            {isLoading && <p className="loading">Loading accessories...</p>}
            {fetchError && <p className="fetch-error">{ fetchError }</p>}
            {!fetchError && !isLoading && (
                <>
                    <h2 className="accessories-section-title">
                        Accessories.&nbsp;
                        <span className="span-title"> 
                            Essentials that pair perfectly with your favorite devices.
                        </span>
                    </h2>
                    <StoreAccessoriesCards accessories={accessories} />
                </>
            )}
        </div>
    );
}

export default StoreAccessories;