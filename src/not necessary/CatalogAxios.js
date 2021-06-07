// import {useEffect, useState} from "react";
// import SingleProduct from "./Common/SingleProduct";
// import SearchBar from "./Common/HeaderSearchBar";
// import searchicon from "./assets/searchicon.png"
// import Buttons from "./Buttons";
// import SelectedItemNum from "./SelectedItemNum";
//
//
// const Catalog = () => {
//
//     const [data, setData] = useState([]);
//     const [inputText, setInputText] = useState('search...');
//     const [sortType, setSortType] = useState();
//     const [count, setCount] = useState(0);
//
//
//     useEffect(() => {
//         const sortArray = type => {
//             const types = {
//                 highToLow: "price",
//                 lowToHigh: "price",
//             };
//             const sortProperty = types[type];
//             const sorted = [...data].sort((a, b) => {if (type === "highToLow") {
//                     return (b[sortProperty] - a[sortProperty]);
//                 } else if (type === "lowToHigh") {
//                     return (a[sortProperty] - b[sortProperty]);
//                 }}
//             );
//             setData(sorted);
//         };
//         sortArray(sortType);
//     }, [sortType]);
//
//     useEffect(() => {
//         getData().then(res => { //sorted
//             setData(res);
//             console.log(data)
//         })
//     }, [inputText])
//
//     const changeInput = (e) => {
//         setInputText(e.target.value);
//     }
//
//     const getData = async () => {
//         const fetchData = await fetch("https://fakestoreapi.com/products")
//         return await fetchData.json();
//     };
//
//     const searchedProducts = () => {
//         setData(data.filter(item => item.title.includes(inputText)));
//     }
//
//     const changeCount = (increment) => {
//         setCount(count + increment);
//     };
//
//
//     return (
//
//         <div>
//             <nav className="main__nav">
//                 <div>
//                     <Buttons classname="header__button-inventory header__button--selector" name="SELECT ALL"/>
//                     <span className="header__span">selected {count} out of 20 products</span>
//                 </div>
//
//                 <div className="main__nav-search-bar">
//                     <input type="text" className="search-bar" value={inputText} id="searchQuery" onChange={changeInput}/>
//                     <button id="searchButton" onClick={searchedProducts}><img src={searchicon}/></button>
//                     <Buttons classname="header__button-inventory" name="ADD TO INVENTORY"/>
//                 </div>
//
//             </nav>
//
//             <div className="main__nav-sort">
//                 <p>Sort By:</p>
//                 <select className="main__nav-select" id="sort" onChange={(e) => setSortType(e.target.value)}>
//                     <option className="nav-select__option">New Arrivals</option>
//                     <option className="nav-select__option" value="highToLow">Price: High To Low</option>
//                     <option className="nav-select__option" value="lowToHigh">Price: Low To High</option>
//                 </select>
//             </div>
//
//
//             <section className="main__catalog">
//                 {
//                     data.map( item => {
//                         return <SingleProduct product={item} onChange={changeCount}/>
//                     })
//                 }
//             </section>
//         </div>
//
//     );
// };
// export default Catalog;