import Category from '../Category/Category';
import './CategoryList.css'

const CategoryList = ({ categories }) => {

    return(
        <div className='categories-titles'>
            {categories.map((category, index) => (
                <Category key={index} category={category} />
            ))}
        </div>
    );
}

export default CategoryList;