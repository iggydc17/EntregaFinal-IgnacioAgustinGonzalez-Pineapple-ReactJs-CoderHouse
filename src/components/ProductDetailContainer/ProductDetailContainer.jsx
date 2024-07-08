import ProductDetailList from "../ProductDetailList/ProductDetailList";
import { getAppleProducts } from "../../data/asyncMockProducts";
import { useEffect, useState } from "react";
import './ProductDetailContainer.css';

const ProductDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchingProductsData = async () => {
            try {
                const productsList = await getAppleProducts();
                setProducts(productsList);

                const categoriesList = Object.keys(productsList);
                setCategories(categoriesList);
                setFetchError(null);
            }
            catch (error) {
                setFetchError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchingProductsData();
    }, []);

    const logCategoriesOnly = (products) => {
        Object.keys(products).forEach(category => {
            setCategories(category);
        });
    };
    
    logCategoriesOnly(getAppleProducts);
    

    return (
        <div>
            {isLoading && <p className="is-loading">Loading products...</p>}
            {fetchError && <p className="fetch-error">{fetchError}</p>}
            {!fetchError && !isLoading && (
                <>
                    <ProductDetailList products={products} categories={categories}/>
                </>
            )}
        </div>
    );
}

export default ProductDetailContainer;