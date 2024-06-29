

const ItemList = (props) => {

    const itemsLists = props.arrayProducts;
    const category = props.category;

    const emptyMessage = "Empty List - Will be updated soon";

    const productList = itemsLists.map(item => (
        <li key={item.id}> {item.category} </li>
    ));


    return(
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-items">{itemsLists.length === 0 ? emptyMessage : productList} </ul>
        </>
    );
}

export default ItemList;