import ItemCount from '../ItemCount/ItemCount';
import TechnicalDetailsContainer from '../TechnicalDetailsContainer/TechnicalDetailsContainer';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

const ItemDetail = ({ id, name, price, stock, description, image, technicalDetails }) => {

    const [quantity, setQuantity] = useState(0);
    const { addItem, isInCart, totalQuantity, totalPrice } = useCart();

    const handleAddProductToCart = (count) => {

        const productObj = { id, name, price, quantity: count}
            addItem(productObj);
            console.log(`Added: ${count} ${name} of $${price} to the Cart.\n Total items: ${totalQuantity}\n Total to pay: $${totalPrice}`);
    }

    return (
        <div className="item-detail">
            <h1 className='product-title'>Buy {name}</h1>
            <p>From ${price}</p>
            <div className='image-and-quantity-container'>
                <div className='product-image-background'>
                    <img src={image} alt={name} className='product-image' />
                </div>
                {isInCart(id) !== 0 && (
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
                )}
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

export default ItemDetail;