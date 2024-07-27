import { useEffect, useState } from "react";
import StoreAccessoriesCards from "../Store Accessories Cards/StoreAccessoriesCards";
import './StoreAccessories.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const StoreAccessories = () => {

    const [accessories, setAccessories] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                setIsLoading(true);

                // Fetch Products with category 'accessories'
                const collectionProductsRef = query(collection(db, "pineappleProducts"), where("category", "==", "accessories"));
                const querySnapshot = await getDocs(collectionProductsRef);
                const accessoriesList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setAccessories(accessoriesList);
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