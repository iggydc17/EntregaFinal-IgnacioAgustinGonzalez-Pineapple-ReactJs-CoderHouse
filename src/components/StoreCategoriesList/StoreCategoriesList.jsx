import StoreCategory from "../StoreCategory/StoreCategory";

const StoreCategoriesList = ({ categories }) => {
    return (
        <div className="store-categories">
            {categories.map((category, index) => (
                <StoreCategory key={index} category={category} />
            ))}
        </div>
    );
}

export default StoreCategoriesList;