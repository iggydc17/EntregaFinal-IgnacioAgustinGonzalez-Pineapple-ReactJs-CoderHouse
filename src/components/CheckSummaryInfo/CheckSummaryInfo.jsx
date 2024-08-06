import { useOrder } from '../../contexts/OrderContext';
import SummarySideInfo from '../SummarySideInfo/SummarySideInfo';
import { Link } from 'react-router-dom';
import './CheckSummaryInfo.css';


const CheckSummaryInfo = () => {

    const { order } = useOrder();

    
    document.title = "Checkout Summary Info - PineApple";

    return (
        <main className='cart-form-main-container check-summary-info-container'>
            <div className="cart-form-container forms-info-container">
                <h1>Review and confirm your purchase</h1>
                <h4>Shipping details</h4>
                <div className='check-container'>
                    <div className="check-icon">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="check-info">
                        <p>Full name: {order.personalInfo.name} {order.personalInfo.lastname}</p>
                        <p>Phone: {order.personalInfo.phoneNumber}</p>
                        <p>Email: {order.personalInfo.email}</p>
                        <p>Location:  
                        {order.shippingInfo.streetNumber} {order.shippingInfo.street}, {order.shippingInfo.city},
                            {order.shippingInfo.state}, {order.shippingInfo.country}
                        </p>
                        <p className='check-zip-code'>{order.shippingInfo.zipCode}</p>
                    </div>
                    <div className="choose-other-container">
                        <Link to={"/shipping-form/"} >
                            Edit or choose other
                        </Link>
                    </div>
                </div>

                <h4>Purchase details</h4>
                <div className='check-container'>
                    <div className="check-icon">
                        <i className="bi bi-truck"></i>
                    </div>
                    <div>Receive / products</div>
                    <div className="choose-other-container">
                        <Link to={"/cart/"} >
                            Modify products
                        </Link>
                    </div>
                </div>
                <div className='check-cart-products-container'>
                    {/* Cart products */}
                </div>

                <h4>Payment details</h4>
                <div className='check-container'>
                    <div className="check-payment-image">
                        {/* visa/mc image */}
                    </div>
                    <div className="check-info">
                        <p>{order.paymentInfo.cardholderName}</p>
                        <p>{order.paymentInfo.cardType}</p>
                        <p>{order.paymentInfo.cardNumber}</p>
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