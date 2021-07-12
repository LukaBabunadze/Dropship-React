import logo from "./Icons/logo.png"
import chamonatvali from "./Icons/chamonatvali.png"
import unknown from "./Icons/unknown.jpg"
import isrebi from "./Icons/isrebi.png"
import ptichka from "./Icons/ptichka.png"
import speed from "./Icons/speed.png"
import urika from "./Icons/urika.png"
import wamowolilebi from "./Icons/wamowolilebi.png"
import kuti from "./Icons/kuti.png"
import arrow from "./Icons/arrow.png"
import SideDetails from "./SideDetails";
import NicheAndCategory from "./NicheAndCategory";
import bluearrow from "./Icons/bluearrow.png"
import NavLinks from "./NavLinks";
import {Link} from "react-router-dom";
import Categories from "./Categories";


const SideNav = () => {
    return (
        <div>
            <nav className="body__nav">
                <div className="body__nav-image">
                    <Link to="/dashboard"><NavLinks firstClass="body__nav-icons body__nav-logo" source={logo}/></Link>
                    <Link to="/product"><NavLinks firstClass="body__nav-icons body__nav-profile" source={unknown}/></Link>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={speed}/>
                    <Link to="/catalog"><NavLinks firstClass="body__nav-icons body__nav--photos" source={wamowolilebi}/></Link>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={kuti}/>
                    <Link to="/cart"><NavLinks firstClass="body__nav-icons body__nav--photos" source={urika}/></Link>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={ptichka}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={isrebi}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={chamonatvali}/>

                </div>
                <Categories />
            </nav>
        </div>

    );
 };

export default SideNav;