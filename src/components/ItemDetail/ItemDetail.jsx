import PropTypes from 'prop-types';
import ItemTotalCalculator from '../ItemTotalCalculator/ItemTotalCalculator';
import TechnicalDetailsContainer from '../TechnicalDetailsContainer/TechnicalDetailsContainer';

const ItemDetail = ({ product }) => {

    return (
        <>
            <div className="item-detail">
                <h1 className='product-title'>Buy {product.name}</h1>
                <p>From ${product.price}</p>
                <div className='image-and-quantity-container'>
                    <div className='product-image-background'>
                        <img src={product.image} alt={product.name} className='product-image' />
                    </div>
                    <ItemTotalCalculator product={product} />
                </div>
                <div className='product-info-box'>
                    <p className='product-description'>{product.description}</p>
                    <h3 className='product-price'>${product.price}</h3>
                    <p className={`product-stock ${product.stock === 0 ? 'sold-out' : 'available'}`}>
                        {product.stock === 0 ? 'SOLD OUT' : `Available stock: ${product.stock}`}
                    </p>
                </div>
                <TechnicalDetailsContainer product={product} />
            </div>
        </>
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