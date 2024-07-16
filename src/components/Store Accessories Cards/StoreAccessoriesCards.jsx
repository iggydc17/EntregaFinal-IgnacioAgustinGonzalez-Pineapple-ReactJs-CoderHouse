import PropTypes from 'prop-types';
import StoreAccessory from "../Store Accessory/StoreAccessory";

const StoreAccessoriesCards = ({ accessories }) => {

    return (
        <section className="accessories-section">
            {accessories.map((accessory) => (
                <StoreAccessory key={accessory.id} accessory={accessory} />
            ))}
        </section>
    );
}

StoreAccessoriesCards.propTypes = {
    accessories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            year: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StoreAccessoriesCards;