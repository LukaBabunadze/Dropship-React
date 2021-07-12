import bluearrow from "../Icons/bluearrow.png";

const SideDetails = ({name}) => {
    return(
        <div className="body__nav-details">
            <div className="nav-details__item">
                <p>{name}</p>
                <img  className="nav-details__item-image" src={bluearrow}/>
            </div>
        </div>
    );
};
export default SideDetails;