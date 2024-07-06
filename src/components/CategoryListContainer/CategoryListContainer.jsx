import CategoryList from "../CategoryList/CategoryList";
import './CategoryListContainer.css';
import { getAppleCategories } from "../../data/asyncMockProducts";
import { useEffect, useState } from "react";


const CategoryListContainer = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAppleCategories().then((res) => {
            setCategories(res);
        })
    }, []);

    return(
        <>
            <h1 id="categories-title">Categories</h1>
            <CategoryList categories={categories}/>
        </>
    );
}

export default CategoryListContainer;