import { PropTypes } from "prop-types";

const ItemList = ({ arrayProducts, category }) => {

    const emptyMessage = "Empty List - Will be updated soon";

    const productList = arrayProducts.map(category => (
        <li key={category.id}> {category.category} </li>
    ));

    return(
        <>
            <h2 className="list-category">{category}</h2>
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