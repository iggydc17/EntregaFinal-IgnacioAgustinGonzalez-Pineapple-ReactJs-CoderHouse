import StoreCategory from "../StoreCategory/StoreCategory";

const StoreCategoriesList = ({ categories }) => {
    
    const orderedCategories = categories.sort((a, b) => a.category.localeCompare(b.category));

    return (

        <div className="store-categories">
            {orderedCategories.map((category, index) => (
                <StoreCategory key={index} category={category} />
            ))}
        </div>
    );
}

export default StoreCategoriesList;