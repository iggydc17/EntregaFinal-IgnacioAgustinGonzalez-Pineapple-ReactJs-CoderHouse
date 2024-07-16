import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const LatestProduct = ( { lastProduct }) => {
    return (
        <div className="last-product-card">
            <Link to={"#"} title={lastProduct.name}>
                <div className="card-info-box">
                    <p className="last-product-name">{lastProduct.name}</p>
                    <h2 className="last-product-description">{lastProduct.description}</h2>
                    <p>From ${lastProduct.price}</p>
                </div>
                <img src={lastProduct.image} alt={lastProduct.name} />
            </Link>
        </div>
    );
}

LatestProduct.propTypes = {
    lastProduct: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};


export default LatestProduct;