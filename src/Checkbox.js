import React from 'react';

const Checkbox = ({isChecked, handleCheckProduct}) => {



    return(
        <input
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckProduct}
            onClick={handleCheckProduct}
        >
        </input>
    );
}

export default Checkbox;