import { Link } from "react-router-dom";

const Item = ({ item }) => {
    
    return (
        <li className="item" title={item.name}>
            <Link to={`/detail/${item.id}/`}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </Link>
        </li>
    );
}

export default Item;