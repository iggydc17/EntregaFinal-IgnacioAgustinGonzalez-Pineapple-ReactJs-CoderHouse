import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const StoreCategory = ({ category }) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="category-card" title={capitalizeFirstLetter(category.category)}>
            <Link to={`/category/${category.category}`}>
                <img src={category.image} alt={category.category} className='store-categories-image'/>
                <p className='category-name'>
                    {capitalizeFirstLetter(category.category)}
                </p>
            </Link>
        </div>
    );
}

StoreCategory.propTypes = {
    category: PropTypes.shape({
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default StoreCategory;
