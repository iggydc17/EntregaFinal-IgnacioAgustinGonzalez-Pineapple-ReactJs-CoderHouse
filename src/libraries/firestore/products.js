import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { createProductAdaptedFromFirebase, 
        createLatestProductAdaptedFromFirebase,
        createCategoryVideosFromFirebase,
        createStoreCategoriesFromFirebase } from "../../adapters/ProductAdaper";


export const getProducts = (categoryId) => {
    const productsCollection = categoryId
    ? query(collection(db, "pineappleProducts"), where("category", "==", categoryId))
    : collection(db, "pineappleProducts")

    return getDocs(productsCollection)
        .then((querySnapShot) => {
            const productAdapted = querySnapShot.docs.map((doc) => {
                return createProductAdaptedFromFirebase(doc)
            });
            return productAdapted;
        })
        .catch((error) => {
            return error;
        })
}

export const getProductById = (itemId) => {
    const productDoc = doc(db, "pineappleProducts", itemId)

    return getDoc(productDoc)
        .then((queryDocumentSnapShot) => {
            const productAdapted = createProductAdaptedFromFirebase(queryDocumentSnapShot);
            return productAdapted;
        })
        .catch((error) => {
            return error
        })
}

export const getVideos = (categoryId) => {
    const videosCollection = categoryId
        ? query(collection(db, "categoriesVideos"), where("category", "==", categoryId))
        : collection(db, "categoriesVideos");

    return getDocs(videosCollection)
        .then((querySnapshot) => {
            const videosAdapted = querySnapshot.docs.map(createCategoryVideosFromFirebase);
            return videosAdapted;
        })
        .catch((error) => {
            console.error('Error fetching videos:', error);
            return error;
        });
};
export const getLatestProducts = () => {
    const latestProductsCollection = collection(db, "theLatestProducts");

    return getDocs(latestProductsCollection)
        .then((querySnapshot) => {
            const latestProductsAdapted = querySnapshot.docs.map(createLatestProductAdaptedFromFirebase);
            return latestProductsAdapted;
        })
        .catch((error) => {
            console.error('Error fetching latest products:', error);
            return error;
        });
};

export const getStoreCategories = () => {
    const storeCategoriesCollection = collection(db, "storeCategories");

    return getDocs(storeCategoriesCollection)
        .then((querySnapshot) => {
            const latestProductsAdapted = querySnapshot.docs.map(createStoreCategoriesFromFirebase);
            return latestProductsAdapted;
        })
        .catch((error) => {
            console.error('Error fetching latest products:', error);
            return error;
        });
};