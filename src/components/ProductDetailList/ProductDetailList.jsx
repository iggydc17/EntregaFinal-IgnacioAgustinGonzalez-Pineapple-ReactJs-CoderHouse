import ProductDetail from '../ProductDetail/ProductDetail';
import './ProductDetailList.css'


const ProductDetailList = ({ products, categories }) => {

    return (
        <>
            <ol className='products-list'>
                {categories.map((category, index) => (
                    <>
                        <h1 className='category-title'>{category}</h1>
                        <div className='products-container' key={index}>
                            {products[category].map((product) => (
                                <ProductDetail key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                ))}
            </ol>
        </>
    );
}

export default ProductDetailList;