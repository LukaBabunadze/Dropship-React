const initialState = {
    clickCount: 1
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COUNTER_INCREASED":
            return {
                ...state,
                clickCount: state.clickCount + action.payload
            };
        case "Counter_DECREASED":
            return {
                ...state,
                clickCount: state.clickCount - action.payload
            };
        default:
            return state;
    }

};

export default CounterReducer;