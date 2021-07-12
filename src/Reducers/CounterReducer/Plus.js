import {useDispatch} from "react-redux";

const Plus = () => {

    const dispatch = useDispatch();

    return(
        <input
            type="button"
            value="+"
            onClick={() => {
                dispatch({
                    type: "COUNTER_INCREASED",
                    payload: 1
                })
            }}
        />
    );
};

export default Plus;