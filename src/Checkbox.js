import {useState} from "react";

const Checkbox = ({increment}) => {
    const [checked, setChecked] = useState(false)

    const changeChecked = (e) => {
        setChecked(e.target.checked);
        increment(e.target.checked ? 1 : -1);
    }
    return(
        <input className="checkbox" type="checkbox" value={checked} onChange={changeChecked}></input>
    );
};

export default Checkbox;