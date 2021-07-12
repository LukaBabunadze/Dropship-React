import {useSelector} from "react-redux";

const Counter = () => {

    const count = useSelector(state => state.counter.clickCount)

    return (
          <p>Count is {count}</p>
    );
};

export default Counter;