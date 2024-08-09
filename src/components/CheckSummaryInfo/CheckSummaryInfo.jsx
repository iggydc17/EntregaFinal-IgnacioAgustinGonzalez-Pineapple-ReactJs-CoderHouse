import { useOrder } from '../../contexts/OrderContext';
import SummarySideInfo from '../SummarySideInfo/SummarySideInfo';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './CheckSummaryInfo.css';

// Format phoneNumber
const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
};

// Format card number 
const formatCardNumber = (cardNumber) => {
    const cleaned = ('' + cardNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}-${match[4]}`;
    }
    return cardNumber;
};

const CheckSummaryInfo = () => {

    const { order } = useOrder();
    const { totalQuantity } = useCart();

    const productText = totalQuantity === 1 ? 'product' : 'products';

    const visaLogoImg = "../../../public/img/payment-logos/visa-logo.webp"
    const mastercardLogoImg = "../../../public/img/payment-logos/mastecard-logo.webp"

    const typePaymentImg = order.paymentInfo.cardType === "Visa" ? visaLogoImg : mastercardLogoImg;

    const formattedCardNumber = formatCardNumber(order.paymentInfo.cardNumber);
    const formattedPhoneNumber = formatPhoneNumber(order.personalInfo.phoneNumber);
    
    document.title = "Checkout Summary Info - PineApple";

    return (
        <main className='cart-form-main-container check-summary-info-container'>
            <div className="cart-form-container forms-info-container">
                <h1>Review and confirm your purchase</h1>
                <h4>Shipping details</h4>

                <div className='check-container'>
                    <span className="check-icon">
                        <i className="bi bi-geo-alt"></i>
                    </span>
                    <div className="check-info check-info-container">
                        <p className='check-zip-code'>Zip Code: {order.shippingInfo.zipCode}</p>
                        <div className="check-info-gray">
                            <p>  
                                {order.shippingInfo.streetNumber} {order.shippingInfo.street}, {order.shippingInfo.city},&nbsp;
                                {order.shippingInfo.state}, {order.shippingInfo.country}
                            </p>
                            <div className="check-name-number">
                                <p>{order.personalInfo.name} {order.personalInfo.lastName}</p>
                                <p>&nbsp;| {formattedPhoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-other-container">
                        <Link to={"/shipping-form/"} >
                            Edit
                        </Link>
                    </div>
                </div>

                <h4>Purchase details</h4>
                <div className='check-container check-shipping-container'>
                    <span className="check-icon">
                        <i className="bi bi-truck"></i>
                    </span>
                    <div className='receives-quantity'>
                        Receives {totalQuantity} {productText} in 1 shipment
                    </div>
                    <div className="choose-other-container">
                        <Link to={"/cart/"} >
                            Modify {productText}
                        </Link>
                    </div>
                </div>
                <div className='check-cart-products-container'>
                    {/* Cart products */}
                </div>

                <h4>Payment details</h4>
                <div className='check-container'>
                    <div className="check-payment-image-container">
                        <img src={typePaymentImg} alt={order.paymentInfo.cardType} className='check-payment-image' />
                    </div>
                    <div className="check-info check-payment-container">
                        <p className='check-card-number'>Card number: {formattedCardNumber}</p>
                        <p className='check-card-holder-name'>Card holder: {order.paymentInfo.cardholderName}</p>
                    </div> 
                    <div className="choose-other-container">
                        <Link to={"/payment-form/"} >
                            Modify
                        </Link>
                    </div>
                </div>
            </div>
            <div className="summary-side-container">
                <SummarySideInfo showConfirmButton={true} />
            </div>
        </main>
    );
}

export default CheckSummaryInfo;