import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';
import TechnicalDetailsContainer from '../TechnicalDetailsContainer/TechnicalDetailsContainer';
import { useState } from 'react';

const ItemDetail = ({ id, name, price, stock, description, image, technicalDetails }) => {

    const [quantity, setQuantity] = useState(0);

    const handleAddProductToCart = (quantity) => {

        const productToAdd = { id, name, price}
        console.log(productToAdd);
        console.log(`Added: ${quantity} ${productToAdd.name}`);
        setQuantity(quantity);
    }

    return (
        <div className="item-detail">
            <h1 className='product-title'>Buy {name}</h1>
            <p>From ${price}</p>
            <div className='image-and-quantity-container'>
                <div className='product-image-background'>
                    <img src={image} alt={name} className='product-image' />
                </div>
                <ItemCount 
                    id={id}
                    name={name}
                    image={image}
                    stock={stock} 
                    price={price}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    onAdd={handleAddProductToCart}
                />
            </div>
            <div className='product-info-box'>
                <p className='product-description'>{description}</p>
                <h3 className='product-price'>Price: ${price}</h3>
                <p className={`product-stock ${stock === 0 ? 'sold-out' : 'available'}`}>
                    {stock === 0 ? 'SOLD OUT' : `Available stock: ${stock}`}
                </p>
            </div>
            <hr />
            <TechnicalDetailsContainer technicalDetails={technicalDetails} />
        </div>
    );
}

ItemDetail.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    technicalDetails: PropTypes.shape({
        connectivity: PropTypes.string,
        batteryLife: PropTypes.string,
        weight: PropTypes.string,
        features: PropTypes.string,
    }).isRequired,
};
export default ItemDetail;