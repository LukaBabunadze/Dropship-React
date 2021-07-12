import arrow from "../Icons/arrow.png";

const NicheAndCategory = ({mainClass, name, paragraphClass}) => {
    return (
        <div>
            <aside className={mainClass}>
                <p className={paragraphClass}><b>{name}</b></p>
                <img className="niche__items--producer" src={arrow}/>
            </aside>
        </div>
    );
};

export default NicheAndCategory;