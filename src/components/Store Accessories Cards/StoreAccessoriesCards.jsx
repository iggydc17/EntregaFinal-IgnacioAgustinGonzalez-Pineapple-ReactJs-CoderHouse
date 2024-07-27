import PropTypes from 'prop-types';
import StoreAccessory from "../Store Accessory/StoreAccessory";

const StoreAccessoriesCards = ({ accessories }) => {

    const sortedAccessories = accessories.sort((a, b) => b.price - a.price);

    return (
        <section className="accessories-section">
            {sortedAccessories.map((accessory) => (
                <StoreAccessory key={accessory.id} accessory={accessory} />
            ))}
        </section>
    );
}

StoreAccessoriesCards.propTypes = {
    accessories: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            year: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StoreAccessoriesCards;