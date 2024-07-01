import { PropTypes } from "prop-types";
import './ItemList.css';

const ItemList = ({ arrayProducts, category, img }) => {

    const productList = arrayProducts.map((product, index) => {
        <li key={index}>
            {product.category}
        </li>
    });

    return(
        <div className="category">
            <a href="#" title={category}>
                <img src={img} alt={category} />
                <h4 className="list-category">
                    {category}
                </h4>
                <ul className="list-items">
                    {productList} 
                </ul>
            </a>
        </div>
    );
}

ItemList.propTypes = {
    category: PropTypes.string,
    arrayProducts: PropTypes.arrayOf(PropTypes.shape({  
        id: PropTypes.number.isRequired, 
        category: PropTypes.string.isRequired,
    })).isRequired
}


export default ItemList;