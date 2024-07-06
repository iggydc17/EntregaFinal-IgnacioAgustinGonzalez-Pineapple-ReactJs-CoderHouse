import Category from '../Category/Category';
import './CategoryList.css';

const CategoryList = ({ categories }) => {


    return(
        <div className='categories-titles'>
            {categories.map((category, index) => {
                return (
                    <Category category={category} key={index} />)
            })}
        </div>
    );
}

export default CategoryList;