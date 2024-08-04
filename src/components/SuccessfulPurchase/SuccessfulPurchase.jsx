import { Link } from "react-router-dom";
import './SuccessfulPurchase.css';

const SuccessfulPurchase = () => {

    document.title = "Successful Purchase - PineApple";

    return (
        <main className="successful-purchase-container">
            <div className="success-container">
                <i className="bi bi-bag-check-fill"></i>
            </div>
            <h1>Enjoy our products!</h1>
            <div className="go-to-store-container">
                <h2>Would you like to buy more PineApple products? </h2>
                <button className="go-to-store-button">
                    <Link to={"/store/"}>
                        Go to store
                    </Link>
                </button>
            </div>
        </main>
    );
}

export default SuccessfulPurchase;