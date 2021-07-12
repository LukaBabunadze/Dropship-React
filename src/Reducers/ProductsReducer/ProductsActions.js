
export const getProductsAction = (products) => {
    return{
        type: "PRODUCT_FETCH",
        payload: products,
    }
};