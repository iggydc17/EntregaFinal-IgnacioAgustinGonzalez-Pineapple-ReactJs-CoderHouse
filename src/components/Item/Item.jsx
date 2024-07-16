import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ item }) => {
    
    return (
        <li className="item" title={item.name}>
            <Link to={`/detail/${item.id}/`}>
                <img src={item.image} alt={item.name} />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">${item.price}</p>
            </Link>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Item;