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


const SideNav = () => {
    return (
        <div>
            <nav className="body__nav">
                <div className="body__nav-image">
                    <NavLinks firstClass="body__nav-icons body__nav-logo" source={logo}/>
                    <NavLinks firstClass="body__nav-icons body__nav-profile" source={unknown}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={speed}/>
                    <Link to="/catalog"><NavLinks firstClass="body__nav-icons body__nav--photos" source={wamowolilebi}/></Link>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={kuti}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={urika}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={ptichka}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={isrebi}/>
                    <NavLinks firstClass="body__nav-icons body__nav--photos" source={chamonatvali}/>

                </div>
                <div className="body__nav-navigator">
                    <NicheAndCategory mainClass="body__nav-niche" name="Choose Niche" paragraphClass="nav__niche-text"/>
                    <NicheAndCategory mainClass="body__nav-category" name="Choose Category" paragraphClass="nav__niche-text"/>
                    <aside className="body__nav-details">
                        <div className="nav-details__item">
                            <p>Ship From</p>
                            <img  className="nav-details__item-image" src={bluearrow}/>
                        </div>
                        <div className="nav-details__item">
                            <p>Ship To</p>
                            <img  className="nav-details__item-image" src={bluearrow}/>
                        </div>
                        <div className="nav-details__item">
                            <p>Select Supplier</p>
                            <img  className="nav-details__item-image" src={bluearrow}/>
                        </div>
                    </aside>
                </div>
            </nav>
        </div>

    );
 };

export default SideNav;