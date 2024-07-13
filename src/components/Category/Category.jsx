import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ category }) => {

    return(
        <div className="category" title={category.category}>
            <Link to="#">
                <img src={category.storeImage} alt={category.category} />
                <h4>{category.category}</h4>
            </Link>
        </div>
    );
}

export default Category; 