export const createProductAdaptedFromFirebase = (doc) => {
    const data = doc.data();

    return {
        id: doc.id,
        name: data.name,
        category: data.category,
        image: data.image,
        price: data.price,
        year: data.year,
        description: data.description,
        stock: data.stock
    };
};

export const createCategoryVideosFromFirebase = (doc) => {
    const data = doc.data();

    return {
        id: doc.id,
        category: data.category,
        video: data.video,
        image: data.image,
        subtitle: data.subtitle
    };
};

export const createLatestProductAdaptedFromFirebase = (doc) => {
    const data = doc.data();

    return {
        id: doc.id,
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        productId: data.productId
    };
};

export const createStoreCategoriesFromFirebase = (doc) => {
    const data = doc.data();

    return {
        id: doc.id,
        category: data.category,
        image: data.image
    };
};
