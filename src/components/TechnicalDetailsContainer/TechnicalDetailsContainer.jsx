import PropTypes from 'prop-types';
import './TechnicalDetailsContainer.css';


const TechnicalDetailsContainer = ({ technicalDetails }) => {

    return (
        <div className="technical-details">
            <h2 className='technical-details-title'>Technical Details</h2>
            <ul>
                {Object.entries(technicalDetails).map(([key, value]) => (
                    <li key={key} className='technical-detail'>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

TechnicalDetailsContainer.propTypes = {
    technicalDetails: PropTypes.shape({
        connectivity: PropTypes.string.isRequired,
        batteryLife: PropTypes.string,
        weight: PropTypes.string,
        features: PropTypes.string.isRequired,
    }).isRequired,
};

export default TechnicalDetailsContainer;