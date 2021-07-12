
const initialState = {
    product: [],
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_FETCH":
            return{
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;