
const ItemDetail = ({ product }) => {
    return (
        <article className="item-detail" title={product.name}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description1}</p>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            <button>{`Buy ${product.name}`}</button>
        </article>
    );
}

export default ItemDetail;