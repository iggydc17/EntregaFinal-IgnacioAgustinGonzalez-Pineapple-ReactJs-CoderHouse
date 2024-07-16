import ItemCount from '../ItemCount/ItemCount';
import './ItemTotalCalculator.css';

const ItemTotalCalculator = ({ product }) => {



    return (
        <div className='item-total-calculator-container'>
            <ItemCount stock={product.stock} />
            <h2 className='total'>Total: $0</h2>
            <button className='add-to-cart-btn'>Add to Cart &nbsp;<i className="bi bi-cart"></i></button>
        </div>
    );
}

export default ItemTotalCalculator;