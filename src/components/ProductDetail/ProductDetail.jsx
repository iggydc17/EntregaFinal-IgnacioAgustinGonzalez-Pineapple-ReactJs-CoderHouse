
const ProductDetail = ({ product }) => {
    
    
    return (
        <li className="product">
            <p>{product.name}</p>
            <p>$ {product.price}</p>
        </li>
    );
}

export default ProductDetail;