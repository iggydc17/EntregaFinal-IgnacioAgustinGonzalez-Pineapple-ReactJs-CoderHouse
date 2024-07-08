import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    
    
    return (
        <li className="product">
            <img src={product.image} alt={product.name} className="img-product" />
            <p>{product.name}</p>
            <p>$ {product.price}</p>
        </li>
    );
}

export default ProductDetail;