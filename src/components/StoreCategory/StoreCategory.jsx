import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const StoreCategory = ({ category }) => {
    return (
        <div className="category-card" title={category.category}>
            <Link to={`/category/${category.category}`}>
                <img src={category.image} alt={category.category} />
                <p className='category-name'>
                    {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
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
