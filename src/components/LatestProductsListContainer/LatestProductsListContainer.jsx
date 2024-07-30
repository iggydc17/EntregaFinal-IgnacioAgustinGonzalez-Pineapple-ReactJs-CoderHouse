import LatesProductsDetail from '../LatesProductsDetail/LatesProductsDetail';
import { useState, useEffect } from 'react';
import './LatestProductsListContainer.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../libraries/firebase';

const LatestProductsListContainer = () => {

    const [lastProducts, setLastProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchingLastProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "theLatestProducts"));
                const products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setLastProducts(products);
                setIsLoading(false);
            } catch (err) {
                setFetchError(err.message);
            }
            finally {
                setIsLoading(false);
            }
        };
        
        fetchingLastProducts();
    }, []);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (fetchError) {
        return <div>Error: {fetchError}</div>;
    }

    return (
        <div id="last-products-list-container">
            <h1 className='latest-products-title'>The latest. 
                <span className='span-title'>Take a look at what’s new, right now.</span>
            </h1>
            <LatesProductsDetail lastProducts={lastProducts} />
        </div>
    );
}

export default LatestProductsListContainer;