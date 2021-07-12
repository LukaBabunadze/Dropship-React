import {useState} from "react";


const SearchBar = ({searchedProducts}) => {

    const [inputText, setInputText] = useState('Search for');

    const changeInput = (e) => {
        setInputText(e.target.value);
    }


    return (
        <div className="main__nav-search-bar">
            <input type="text" value={inputText} id="searchQuery" onChange={changeInput}/>
            <button id="searchButton" onClick={searchedProducts}>Search</button>
        </div>
    );
};

export default SearchBar;