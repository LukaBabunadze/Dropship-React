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

        case "HIGH_TO_LOW":
            return {
                ...state,
                productList: action.payload
            };
        case "LOW_TO_HIGH":
            return {
              ...state,
              productList: action.payload
            };
        case "A_TO_Z":
            return {
                ...state,
                productList: action.payload
            };
        case "Z_TO_A":
            return {
                ...state,
                productList: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;