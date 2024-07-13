import LatesProductsDetail from '../LatesProductsDetail/LatesProductsDetail';
import { useState, useEffect } from 'react';
import { getLastProducts } from '../../data/asyncMockTheLatests';
import './LatestProductsListContainer.css';

const LatestProductsListContainer = () => {

    const [lastProducts, setLastProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchingLastProducts = async () => {
            try {
                const response = await getLastProducts();
                setLastProducts(response);
                setIsLoading(false);
            }
            catch(err) {
                setFetchError(err);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchingLastProducts();
    }, []);
    

    return (
        <div id="last-products-list-container">
            {isLoading && <p className='loading'>Loading Last Products...</p>}
            {fetchError && <p className='fetchError' style={{ color: "tomato" }} > {fetchError} </p>}
            {!fetchError && !isLoading && 
                <>
                    <h1 className='latest-products-title'>The latest. <span className='last-products-span'>Take a look at what’s new, right now.</span></h1>
                    <LatesProductsDetail lastProducts={lastProducts} />
                </>
            }
        </div>
    );
}

export default LatestProductsListContainer;