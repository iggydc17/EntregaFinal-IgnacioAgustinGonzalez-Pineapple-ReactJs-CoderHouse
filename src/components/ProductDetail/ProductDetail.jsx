import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    
    
    return (
        <li className="product" title={product.name}>
            <a href="#">
                <img src={product.image} alt={product.name} className="img-product" />
                <p className='product-name'>{product.name}</p>
                <p className='product-description'>{product.description}</p>
                <p className='product-price'>$ {product.price}</p>
            </a>
        </li>
    );
}

export default ProductDetail;
