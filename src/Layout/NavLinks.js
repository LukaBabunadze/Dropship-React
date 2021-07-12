import logo from "../Icons/logo.png";

const NavLinks = ({firstClass, source}) => {
    return(
        <div>
            <a className={firstClass}>
                <img src={source}/>
            </a>
        </div>
    );
};
export default NavLinks;