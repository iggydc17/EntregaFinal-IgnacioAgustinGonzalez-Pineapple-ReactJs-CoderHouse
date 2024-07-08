import ProductDetail from '../ProductDetail/ProductDetail';
import './ProductDetailList.css'


const ProductDetailList = ({ products, categories }) => {


    return (
        <>
            <ol className='products-list'>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h1 className='category-title'>{category}</h1>
                        {products[category].map((product) => (
                            <ProductDetail key={product.id} product={product} />
                        ))}
                    </div>
                ))}
            </ol><hr />
        </>
    );
}

export default ProductDetailList;