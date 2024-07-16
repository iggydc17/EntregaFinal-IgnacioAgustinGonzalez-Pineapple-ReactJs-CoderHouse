import PropTypes from 'prop-types';
import ItemTotalCalculator from '../ItemTotalCalculator/ItemTotalCalculator';

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <h1 className='product-title'>Buy {product.name}</h1>
            <p>From ${product.price}</p>
            <div className='image-and-quantity-container'>
                <div className='product-image-background'>
                    <img src={product.image} alt={product.name} className='product-image' />
                </div>
                <ItemTotalCalculator product={product} />
            </div>
            <p className='product-description'>{product.description}</p>
            <h3 className='product-price'>${product.price}</h3>
            <p className='product-stock' style={{ color: product.stock === 0 ? 'tomato' : '#333' }}>
                {product.stock === 0 ? 'SOLD OUT' : `Available stock: ${product.stock}`}
            </p>
            <div className="technical-details">
                <h2 className='technical-details-title'>Technical Details</h2>
                <ul>
                    {Object.entries(product.technicalDetails).map(([key, value]) => (
                            <li key={key} className='technical-detail'>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemDetail;