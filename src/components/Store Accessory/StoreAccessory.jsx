import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const StoreAccessory = ({ accessory }) => {
    return (
        <div className="accessory-card" title={accessory.name}>
            <Link to={`/detail/${accessory.id}`}>
                <img src={accessory.image} alt={accessory.name} />
                <p className='new'>New</p>
                <p className='accessory-name'>{accessory.name}</p>
                <p className='accessory-price'>${accessory.price.toFixed(2)}</p>
            </Link>
        </div>
    );
}

StoreAccessory.propTypes = {
    accessory: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default StoreAccessory;