import './Category.css';

const Category = ({ category }) => {

    console.log(category)
    return(
        <div className="category">
            <a href="#" title={category.category}>
                <img src={category.storeImage} alt={category.category} />
                <h4>{category.category}</h4>
            </a>
        </div>
    );
}

export default Category;