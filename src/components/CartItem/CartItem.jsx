import { Link } from "react-router-dom";
const CartItem = ({ id, name, image, quantity, price}) => {

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
                    </section>
                </Link>
                <button className="delete-cart-button" title="">Delete</button>
            </article>
        </>
    );
}

export default CartItem;