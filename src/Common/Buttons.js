const Buttons = ({classname, name, handleSelectAll, handleClearAll}) => {
    return(
            <button className={classname} onClick={name==="CLEAR SELECTED" ? handleClearAll : handleSelectAll}><b>{name}</b></button>
    );
};

export default Buttons;