import { Link } from "react-router-dom";
import { useOrder } from "../../contexts/OrderContext";
import './SuccessfulPurchase.css';

const SuccessfulPurchase = () => {
    const { order } = useOrder();
    document.title = "Successful Purchase - PineApple";

    return (
        <main className="successful-purchase-container">
            <div className="go-to-store-container">
                <div className="success-location-container">
                    <h2>Shipment to {order.shippingInfo.streetNumber} {order.shippingInfo.street}</h2>
                </div>
                <div className="arrives-tomorrow-container">
                    <p>Arrives at your home tomorrow</p>
                </div>
                <div className="success-go-to-store-container">
                    <h3>Would you like to buy more PineApple products? </h3>
                    <button className="go-to-store-button">
                        <Link to={"/store/"}>
                            Go to store
                        </Link>
                    </button>
                </div>
            </div>
            <div className="success-container">
                <h1>Congratulations!</h1>
                <span className="icon-wrapper">
                    <i className="bi bi-bag-check-fill"></i>
                </span>
            </div>
        </main>
    );
}

export default SuccessfulPurchase;
