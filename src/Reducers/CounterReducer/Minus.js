import {useDispatch} from "react-redux";


const Minus = () => {

    const dispatch = useDispatch();

    return(
        <input
            type="button"
            value="-"
            onClick={() => {
                dispatch({
                    type: "Counter_DECREASED",
                    payload: 1,
                })
            }}
        />
    );
};

export default Minus;