import './TechnicalDetailsContainer.css';


const TechnicalDetailsContainer = ({ product }) => {


    return (
        <div className="technical-details">
            <h2 className='technical-details-title'>Technical Details</h2>
            <ul>
                {Object.entries(product.technicalDetails).map(([key, value]) => (
                    <li key={key} className='technical-detail'>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TechnicalDetailsContainer;