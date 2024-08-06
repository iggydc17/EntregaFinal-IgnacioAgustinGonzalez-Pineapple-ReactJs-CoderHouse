import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../hooks/useNotification";

const CartItem = ({ id, name, image, quantity, price}) => {

    
    const { removeItem } = useCart();
    const { setNotification } = useNotification();


    const handleRemove = (id) => {
        removeItem(id)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setNotification("warning", `${quantity} ${name} has been removed from Cart`);
    }

    return (
        <>
            <article className="item-article" title={name}>
                    <div className="cart-column cart-image-container">
                        <img src={image} alt={`${name} image`} className="cart-image" />
                    </div>
                    <div className="cart-column cart-details">
                        <Link to={`/detail/${id}`} className="cart-item-link">
                                <h2 className="cart-name">{name}</h2>
                        </Link>
                        <section>
                            <p>Unity price: ${price} | Quantity: {quantity} </p>
                            <button 
                                className="delete-cart-button"
                                onClick={() => handleRemove(id)}
                                title="">
                                Delete
                            </button>
                        </section>
                    </div>
                    <div className="subtotal-div">
                        <p className="cart-item-subtotal"> ${price * quantity}</p>
                    </div>
            </article>
        </>
    );
}

export default CartItem;