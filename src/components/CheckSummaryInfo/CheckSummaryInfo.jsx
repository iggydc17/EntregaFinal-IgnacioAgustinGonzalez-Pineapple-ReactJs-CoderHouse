import { useOrder } from '../../contexts/OrderContext';
import { useNavigate } from 'react-router-dom';
import SummarySideInfo from '../SummarySideInfo/SummarySideInfo';
import './CheckSummaryInfo.css';


const CheckSummaryInfo = () => {

    const { order } = useOrder();
    const navigate = useNavigate();

    navigate("/successful-purchase/");
    
    document.title = "Checkout Summary Info - PineApple";

    return (
        <main className='check-summary-info-container'>
            <div className="forms-info-container">
                <h1>Check Summary Info</h1>
                <div>
                    <h2>Buyer Personal Info</h2>
                    <p>Full name: {order.personalInfo.name} {order.personalInfo.lastname}</p>
                    <p>Phone: {order.personalInfo.phoneNumber}</p>
                    <p>Email: {order.personalInfo.email}</p>
                </div>
                <div>
                    <h2>Shipping Info</h2>
                    <p>Location:  
                        {order.shippingInfo.streetNumber} {order.shippingInfo.street}, {order.shippingInfo.city},
                        {order.shippingInfo.state}, {order.shippingInfo.country}
                        {order.shippingInfo.zipCode}
                    </p>
                </div>
                <div>
                    <h2>Payment Info</h2>
                    <p>{order.paymentInfo.cardholderName}</p>
                    <p>{order.paymentInfo.cardType}</p>
                    <p>{order.paymentInfo.cardNumber}</p>
                </div>
                <div className='confirm-purchase-button-container'>
                    <button className='confirm-purchase-button'>Confirm Purchase</button>
                </div>
            </div>
            <div className="summary-side-container">
                <SummarySideInfo />
            </div>
        </main>
    );
}

export default CheckSummaryInfo;