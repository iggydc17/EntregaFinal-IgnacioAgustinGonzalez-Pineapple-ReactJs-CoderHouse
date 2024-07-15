import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <article className="item-detail" title={product.name}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description1}</p>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            < ItemCount stock={product.stock} />
            <button className='buy-btn'>{`Buy ${product.name}`}</button>
        </article>
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