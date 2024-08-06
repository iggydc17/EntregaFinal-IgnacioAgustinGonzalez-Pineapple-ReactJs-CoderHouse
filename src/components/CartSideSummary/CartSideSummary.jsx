import './CartSideSummary.css';

const CartSideSummary = ({ total, totalQuantity }) => {
    return (
        <div className='cart-summary-side-container'>
            <h3 className='cart-summary-title'>Purchase summary: </h3>
            <div className='cart-side-products-summary-container'>
                <p className='cart-side-products-summary'>Products ({totalQuantity})</p>
                <p className='cart-side-products-summary'>${total}</p>
            </div>
            <div className='cart-side-container'>
                <p>Shipment</p>
                <p className='free'>Free</p>
            </div>
            <div className='cart-total-side-container'>
                <p className='cart-summary-total-p'>Total</p>
                <p className='cart-summary-total'>${total}</p>
            </div> 
        </div>
    );
}

export default CartSideSummary;