import {useEffect, useState} from "react";
import SingleProduct from "./Common/SingleProduct";
import SearchBar from "./Common/HeaderSearchBar";
import searchicon from "./Icons/searchicon.png"
import Buttons from "./Buttons";
import SelectedItemNum from "./SelectedItemNum";
import axios from "axios";
import SortHtml from "./Common/SortHtml";
import Modal from "./Common/Modal"
import Checkbox from "./Checkbox";


const Catalog = () => {

    const [productsData, setProductsData] = useState([]);
    const [inputText, setInputText] = useState('search...');
    const [sortType, setSortType] = useState();
    const [modalData, setModalData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)




    // *** Sort ***
    useEffect(() => {
        const sortArray = type => {
            const types = {
                highToLow: "price",
                lowToHigh: "price",
                aToZ: "title",
                zToA: "title",
            };
            const sortProperty = types[type];
            const sorted = [...productsData].sort((a, b) => {if (type === "highToLow") {
                return (b[sortProperty] - a[sortProperty]);
            } else if (type === "lowToHigh") {
                return (a[sortProperty] - b[sortProperty]);
                }
              else if (type === "aToZ" && (b[sortProperty] > a[sortProperty])) {
                  return -1;
                }
              else if (type === "zToA" && (a[sortProperty] > b[sortProperty])) {
                  return - 1;
                };
                }
            );
            setProductsData(sorted);
        };
        sortArray(sortType);
    }, [sortType]);



    // *** Axios Get Data ***

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(res => localStorage.setItem("products", JSON.stringify(res.data)))
    }, [])
    useEffect(() => {
        const allProducts = JSON.parse(localStorage.getItem("products"));
        setProductsData(allProducts);
    }, [])




    // *** SearCh ***

    const changeInput = (e) => {
        setInputText(e.target.value);
    }

    const searchedProducts = () => {
        setProductsData(productsData.filter(item => item.title.toLowerCase().includes(inputText.toLowerCase())));
    }


    // *** Modal ***

    const handleOpen = ({image, price, title, description}) => {
        setModalOpen(true);
        setModalData({image, price, title, description});
    };
    const handleClose = () => {
        setModalOpen(false);
    };



    // *** Select All / Clear All ***

    const handleCheckProduct = (productId) => {
        const checkedProducts = productsData.map(product =>
            product.id === productId
                ? {...product, isChecked: !product.isChecked}
                : product
        );
        setProductsData(checkedProducts);
    };

    const selectedProducts = productsData.filter((product) => product.isChecked);
    console.log(selectedProducts);


    const handleClearAll = () => {
        setProductsData(productsData.map((product) => ({...product, isChecked: false})))
    }

    const handleSelectAll = () => {
      setProductsData(productsData.map((product) => ({...product, isChecked: true})))
    };


    return (

        <div>
            <nav className="main__nav">
                <div>
                    <Buttons classname="header__button-inventory header__button--selector" name="SELECT ALL" handleSelectAll={handleSelectAll}/>
                    <span className="header__span">{`selected ${selectedProducts.length} out of ${productsData.length} products`}</span>
                    {selectedProducts.length > 0 ? <Buttons classname="header__button-inventory header__button--selector" name="CLEAR SELECTED" handleClearAll={handleClearAll}/> : ""}
                </div>

                <div className="main__nav-search-bar">
                    <input type="text" className="search-bar" value={inputText} id="searchQuery" onChange={changeInput}/>
                    <button id="searchButton" onClick={searchedProducts}><img src={searchicon}/></button>
                    <Buttons classname="header__button-inventory" name="ADD TO INVENTORY"/>
                </div>

            </nav>

            <div className="main__nav-sort">
                <p>Sort By:</p>
                <SortHtml setSortType={setSortType}/>
            </div>


            <section className="main__catalog">
                {
                    productsData.map( item => {
                         return <SingleProduct
                             product={item}
                             handleOpen={handleOpen}
                             isChecked={item.isChecked}
                             handleCheckProduct={() => handleCheckProduct(item.id)}
                         />
                    })
                }
            </section>
            {modalOpen && <Modal modalData={modalData} handleClose={handleClose}/>}
        </div>

    );
};
export default Catalog;