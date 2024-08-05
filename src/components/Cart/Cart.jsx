import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';
import './Cart.css';

const Cart = () => {

    const { cart, totalQuantity, getTotalPrice, clearCart } = useCart();
    const { setNotification } = useNotification();
    const total = getTotalPrice();

    const handleClearCart = () => {
        clearCart();
        setNotification("warning", "The cart is empty");
    }
    
    document.title = "Cart - PineApple";

    return (
        <main className='cart-main'>
            <h1 className='cart-title'>Cart</h1>
            {totalQuantity === 0 ? (
                <div className='empty-cart-container'>
                    <h2 className='empty-cart-h2'>Your Cart is Empty</h2>
                    <Link className="go-to-store-button empty-cart-button" to={"/store/"} >Check out our store!</Link>
                </div>
            ) : (
                <>
                    <p className='total-products-in-cart'>Total products in the cart: <strong>{totalQuantity}</strong></p>
                    <div className='cart-products-resume-container'>
                        {cart.map((prod) => (
                            <CartItem key={prod.id} {...prod}  />
                        ))}
                    </div>
                    <div className='down-cart-container'>
                        <button 
                            className='clear-cart-button'
                            onClick={handleClearCart}>
                                Clear Cart &nbsp; <i className="bi bi-trash3"></i>
                        </button>
                        <h3 className='cart-total-pay'>Total: ${total}</h3>
                        <Link 
                            to={"/buyer-personal-info-form/"}
                            className='go-to-store-button continue-button' >
                                Continue
                        </Link>
                    </div>
                </>
            )}
        </main>
    );
}

export default Cart;