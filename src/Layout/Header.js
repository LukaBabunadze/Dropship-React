import Buttons from "../Common/Buttons";
import searchicon from "../Icons/searchicon.png";
import React from "react";
import Logout from "../Authorization/Logout";

const Header = ({
                    handleSelectAll,
                    selectedProducts,
                    productList,
                    handleClearAll,
                    inputText,
                    changeInput,
                    searchedProducts
                }) => {
    return(
        <nav className="main__nav">
            <div>
                <Buttons
                    classname="header__button-inventory header__button--selector"
                    name="SELECT ALL"
                    handleSelectAll={handleSelectAll}
                />
                <span className="header__span">
                        {`selected ${selectedProducts.length} out of ${productList.length} products`}
                    </span>
                {selectedProducts.length > 0 ?
                    <Buttons
                        classname="header__button-inventory header__button--selector"
                        name="CLEAR SELECTED"
                        handleClearAll={handleClearAll}
                    />
                    :
                    ""
                }
            </div>

            <div className="main__nav-search-bar">
                <input
                    type="text"
                    className="search-bar"
                    placeholder={inputText}
                    id="searchQuery"
                    onChange={changeInput}
                />
                <button
                    id="searchButton"
                    onClick={searchedProducts}
                >
                    <img src={searchicon}/>
                </button>
                <Buttons
                    classname="header__button-inventory"
                    name="ADD TO INVENTORY"
                />
                <Logout/>
            </div>

        </nav>
    );
};

export default Header;