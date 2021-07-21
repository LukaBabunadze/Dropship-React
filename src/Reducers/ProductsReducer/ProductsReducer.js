const initialState = {
    productList: [],
};


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_FETCHED":
            return {
                ...state,
                productList: action.payload
            };
        case "PRODUCT_SEARCHED":
            return {
                ...state,
                productList: action.payload
            };
        case "PRODUCTS_SORTED":
            return {
                ...state,
                productList: action.payload
            }
        case "PRODUCTS_CHECKED":
            return {
                ...state,
                productList: action.payload
            };
        case "CLEAR_ALL":
            return {
                ...state,
                productList: action.payload
            };
        case "SELECT_ALL":
            return {
                ...state,
                productList: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;