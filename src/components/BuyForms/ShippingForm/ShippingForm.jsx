import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import { useNotification } from "../../../hooks/useNotification";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import '../BuyInfoForms.css';

const ShippingForm = () => {

    
    const { order, setOrder } = useOrder();
    const { setNotification } = useNotification();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        country: "",
        state: "",
        city: "",
        street: "",
        streetNumber: "",
        zipCode: ""
    });

    useEffect(() => {
        const savedData = localStorage.getItem('shippingInfo');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem('shippingInfo', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.country || !formData.state || !formData.city || !formData.street || 
            !formData.streetNumber || !formData.zipCode) {
                setNotification("danger", "Please fill in all fields");
                return;
            }


        const updatedOrder = {
            ...order,
            shippingInfo: formData
        };

        setOrder(updatedOrder);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setNotification("success", "Shipping Info pass successfully!");    
        
        setTimeout(() => {
            navigate("/payment-form/");
        }, 3000);
    };

    document.title = "Shipping Form - PineApple";

    
    return (
        <main className="cart-form-main-container shipping-info-form-container">
            <div className="cart-form-container">
                <h1 className="cart-form-title">Shipping Info</h1>
                <form className="cart-form shipping-cart-form" onSubmit={handleSubmit}>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="country-input">Country: </label>
                            <input 
                                type="text"
                                name="country"
                                className="country-input"
                                placeholder="Enter your country" 
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="state-input">State: </label>
                            <input 
                                type="text"
                                name="state"
                                className="state-input"
                                placeholder="Enter your state" 
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="city-input">City: </label>
                            <input 
                                type="text"
                                name="city"
                                className="city-input"
                                placeholder="Enter your city" 
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="street-input">Street: </label>
                            <input 
                                type="text"
                                name="street"
                                className="street-input"
                                placeholder="Enter your street" 
                                value={formData.street}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-box-container">
                        <div className="form-box">
                            <label htmlFor="street-number-input">Street number: </label>
                            <input 
                                type="text"
                                name="streetNumber"
                                className="street-number-input"
                                placeholder="Enter the street number" 
                                value={formData.streetNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-box">
                            <label htmlFor="zip-code-input">Zip Code: </label>
                            <input 
                                type="text"
                                name="zipCode"
                                className="zip-code-input"
                                placeholder="Enter the zip code" 
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="cart-form-continue-btn-container">
                        <button type="submit" className="continue-button">Continue</button>
                    </div>
                </form>
            </div>
            <div className="summary-side-container">
                <SummarySideInfo />
            </div>
        </main>
    );
}

export default ShippingForm;