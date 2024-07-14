import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ item }) => {
    
    return (
        <li className="item" title={item.name}>
            <Link to={`/detail/${item.id}/`}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
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