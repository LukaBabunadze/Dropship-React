const SortHtml =({setSortType}) => {
    return(
        <select className="main__nav-select" id="sort" onChange={(e) => setSortType(e.target.value)}>
            <option className="nav-select__option">New Arrivals</option>
            <option className="nav-select__option" value="highToLow">Price: High To Low</option>
            <option className="nav-select__option" value="lowToHigh">Price: Low To High</option>
            <option className="nav-select__option" value="aToZ">Title: A To Z</option>
            <option className="nav-select__option" value="zToA">Title: Z To A</option>
        </select>
    );
};

export default SortHtml;