import { Link } from 'react-router-dom';

export const StoreCategory = ({ category }) => {
    return (
        <div className="category-card" title={category.category}>
            <Link to={`/category/${category.category}`}>
                <img src={category.image} alt={category.category} />
                <p className='category-name'>{category.category}</p>
            </Link>
        </div>
    );
}

export default StoreCategory;
