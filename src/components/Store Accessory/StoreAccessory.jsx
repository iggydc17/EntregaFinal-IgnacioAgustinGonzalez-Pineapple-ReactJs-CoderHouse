import { Link } from 'react-router-dom';


const StoreAccessory = ({ accessory }) => {
    return (
        <div className="accessory-card" title={accessory.name}>
            <Link to={`/detail/${accessory.id}`}>
                <img src={accessory.image} alt={accessory.name} />
                <p className='new'>New</p>
                <p className='accessory-name'>{accessory.name}</p>
                <p className='accessory-price'>${accessory.price.toFixed(2)}</p>
            </Link>
        </div>
    );
}

export default StoreAccessory;