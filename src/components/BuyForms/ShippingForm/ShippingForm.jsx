import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../../contexts/OrderContext";
import SummarySideInfo from "../../SummarySideInfo/SummarySideInfo";
import { toast } from "react-toastify";

const ShippingForm = () => {

    const [formData, setFormData] = useState({
        country: "",
        state: "",
        city: "",
        street: "",
        zipCode: ""
    })

    const { setOrder } = useOrder();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrder(prevOrder => ({
            ...prevOrder,
            shippingInfo: formData
        }));

        toast.success("Shipping Info pass successfully!");    
        
        setTimeout(() => {
            navigate("/payment-form/");
        }, 1500);
    };

    return (
        <main className="cart-form-container shipping-info-form-container">
            <h2>Shipping Info</h2>
            <div className="forms-general-container">
                <form className="cart-form shipping-cart-form" onSubmit={handleSubmit}>
                    <label htmlFor="country-input">Country: </label>
                    <input 
                        type="text"
                        name="country"
                        className="country-input"
                        placeholder="Enter your country" 
                        value={formData.country}
                        onChange={handleChange}
                    />
                    <label htmlFor="state-input">State: </label>
                    <input 
                        type="text"
                        name="state"
                        className="state-input"
                        placeholder="Enter your state" 
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <label htmlFor="city-input">City: </label>
                    <input 
                        type="text"
                        name="city"
                        className="city-input"
                        placeholder="Enter your city" 
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <label htmlFor="street-input">Street: </label>
                    <input 
                        type="text"
                        name="street"
                        className="street-input"
                        placeholder="Enter your street" 
                        value={formData.street}
                        onChange={handleChange}
                    />
                    <label htmlFor="street-number-input">Street number: </label>
                    <input 
                        type="text"
                        name="number"
                        className="number-input"
                        placeholder="Enter the street number" 
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <label htmlFor="zip-code-input">Zip Code: </label>
                    <input 
                        type="text"
                        name="zipCode"
                        className="zip-code-input"
                        placeholder="Enter the zip code" 
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                    
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                <div className="summary-side-container">
                    <SummarySideInfo />
                </div>
            </div>
        </main>
    );
}

export default ShippingForm;