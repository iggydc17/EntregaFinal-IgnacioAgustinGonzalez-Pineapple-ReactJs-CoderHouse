import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';
import { useState } from 'react';
import './SummarySideInfo.css';


const SummarySideInfo = ({ showConfirmButton }) => {

    const [textButton, setTextButton] = useState("Confirm Purchase");
    const [isLoading, setIsLoading] = useState(false);
    const {totalQuantity, getTotalPrice} = useCart();
    const { clearCart } = useCart();
    const { setNotification } = useNotification();
    const total = getTotalPrice();
    const navigate = useNavigate();

    const handleConfirmPurchase = () => {
        setIsLoading(true);
        setTextButton("Loading...");

        setTimeout(() => {
            navigate("/successful-purchase/");
            clearCart();
            localStorage.removeItem('cart');
            localStorage.removeItem('buyerPersonalInfo');
            localStorage.removeItem('shippingInfo');
            localStorage.removeItem('paymentInfo');
            setNotification("success", "The order is processing...");
        }, 3000);
    }

    return (
        <div className='summary-side-info-container'>
            <h3 className='summary-title'>Purchase summary: </h3>
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
            {showConfirmButton && (
                <div className='cart-form-continue-btn-container check-summary-continue-button'>
                    <button 
                        className={`confirm-purchase-button continue-button ${isLoading ? 'loading' : ''}`} 
                        onClick={handleConfirmPurchase}
                        disabled={isLoading}
                    >
                        {textButton}
                    </button>
                </div>
            )}        
        </div>
    );
}

export default SummarySideInfo;