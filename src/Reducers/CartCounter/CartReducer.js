const initialState = {
    cartProducts: [],
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_ARRIVED":
            return {
                ...state,
                cartProducts: action.payload
            };
        case "CART_UPDATED":
            return {
                ...state,
                cartProducts: action.payload
            }
        default:
            return state;
    }
};

export default CartReducer;