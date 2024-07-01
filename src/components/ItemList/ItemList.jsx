import { PropTypes } from "prop-types";
import './ItemList.css';

const ItemList = ({ arrayProducts, category }) => {

    const emptyMessage = "Empty List - Will be updated soon";

    const productList = arrayProducts.map((category, index) => {
        <li key={index}>
            {category}
        </li>
    });

    return(
        <>
            <h2 className="list-category">
                <a href="#">
                    {category}
                </a>
            </h2>
            <ul className="list-items">{arrayProducts.length === 0 ? emptyMessage : productList} </ul>
        </>
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