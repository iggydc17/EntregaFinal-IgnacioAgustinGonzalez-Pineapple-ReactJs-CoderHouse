import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNotification } from '../../hooks/useNotification';

const ItemDetail = ({ id, name, price, stock, year, description, image }) => {

    const [quantity, setQuantity] = useState(0);
    const { addItem, isInCart } = useCart();
    const {setNotification} = useNotification();

    document.title = `${name} - PineApple`;

    const handleAddProductToCart = (count) => {

        const productObj = { id, name, price, quantity: count}
            addItem(productObj);
            setNotification("success", `${count} ${name} added to the Cart`);
    }

    return (
        <div className="item-detail">
            <h1 className='product-title'>Buy {name}</h1>
            <p>From ${price}</p>
            <p className='free-shipping'>Free Shipping <i className="bi bi-truck"></i></p>
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
                        year={year}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        onAdd={handleAddProductToCart}
                    />
                )}
            </div>
            <div className='product-info-box'>
                <p className='product-description'>{description}</p>
                <h3 className='product-price'>Price: ${price}</h3>
                <p className='product-year'>Release year: {year}</p>
                <p className={`product-stock ${stock === 0 ? 'sold-out' : 'available'}`}>
                    {stock === 0 ? 'SOLD OUT' : `Available stock: ${stock} unities`}
                </p>
            </div>
            <hr />
        </div>
    );
}

export default ItemDetail;