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
                <Link to={`/detail/${id}`}>
                    <div className="cart-image-container">
                        <img src={image} alt={`${name} image`} className="cart-image" />
                    </div>
                    <h2 className="cart-name">{name}</h2>
                    <section>
                        <p>Quantity: {quantity}</p>
                        <p>Unity price: ${price}</p>
                        <p>Subtotal: ${price * quantity}</p>
                    </section>
                </Link>
                <button 
                    className="delete-cart-button"
                    onClick={() => handleRemove(id)}
                    title="">
                        Delete
                </button>
            </article>
        </>
    );
}

export default CartItem;