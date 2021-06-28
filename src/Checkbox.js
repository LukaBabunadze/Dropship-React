import React from 'react';

const Checkbox = ({isChecked, handleCheckProduct}) => {



    return(
        <input
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckProduct}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
        </input>
    );
}

export default Checkbox;