import React from "react";
import {useEffect, useState} from "react";
import SingleProduct from "./SingleProduct";
import searchicon from "../Icons/searchicon.png"
import Buttons from "./Buttons";
import axios from "axios";
import SortHtml from "./SortHtml";
import Modal from "./Modal"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {makeStyles} from "@material-ui/core/styles"
import {Switch, Route, Link, useParams, useHistory} from "react-router-dom";
import {products as productsAPI} from "./API";
import {useDispatch, useSelector} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


const Catalog = () => {

    const productList = useSelector(state => state.products.productList)
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('search...');
    const [sortType, setSortType] = useState();
    const [selectedProducts, setSelectedProducts] = useState([]);



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
            if (type === "highToLow") {
                dispatch({
                    type: "HIGH_TO_LOW",
                    payload: [...productList].sort((a, b) => {
                            return (b[sortProperty] - a[sortProperty]);
                        }
                    )
                })
            } else if (type === "lowToHigh") {
                dispatch({
                    type: "LOW_TO_HIGH",
                    payload: [...productList].sort((a, b) => {
                        return (a[sortProperty] - b[sortProperty])
                    })
                })
            } else if (type === "aToZ") {
                dispatch({
                    type: "A_TO_Z",
                    payload: [...productList].sort((a, b) => {
                        if((b[sortProperty] > a[sortProperty])){
                            return -1;
                        }
                    })
                })
            } else if (type === "zToA") {
                dispatch({
                    type: "Z_TO_A",
                    payload: [...productList].sort((a, b) => {
                        if((a[sortProperty] > b[sortProperty])) {
                            return -1;
                        }
                    })
                })
            }
        }
        sortArray(sortType)
    }, [sortType])



    // *** Axios Get Data ***

    useEffect(() => {
        productsAPI().then(res => {
            dispatch({
                type: "PRODUCTS_FETCHED",
                payload: res,
            });
        })
    }, [])

    useEffect(() => {
        productsAPI().then(res => {
            localStorage.setItem("products", JSON.stringify(res));
        })
    }, [])




    // *** SearCh ***

    const changeInput = (e) => {
        setInputText(e.target.value);
    }



    const searchedProducts = () => {
        dispatch({
            type: "PRODUCT_SEARCHED",
            payload: productList.filter(item => item.title.toLowerCase().includes(inputText.toLowerCase()))
        });
        // setProducts(products.filter(item => item.title.toLowerCase().includes(inputText.toLowerCase())));
    }





    // *** Select All / Clear All ***

    // const handleCheckProduct = (productId) => {
    //     const checkedProducts = products.map(product =>
    //         product.id === productId
    //             ? {...product, isChecked: !product.isChecked}
    //             : product
    //     );
    //     setProducts(checkedProducts);
    //
    // };
    //
    // useEffect(() => {
    //     setSelectedProducts(products.filter((product) => product.isChecked));
    // }, [products])
    //
    //
    // const handleClearAll = () => {
    //     setProducts(products.map((product) => ({...product, isChecked: false})))
    // }
    //
    // const handleSelectAll = () => {
    //     setProducts(products.map((product) => ({...product, isChecked: true})))
    // };




    // *** Material-Ui ***
    const useStyles = makeStyles( ({
        root: {
            flexGrow: 1,
        },
    }));


    // *** Modal Id ***

    const {id} = useParams();



    return (

        <div>
            <nav className="main__nav">
                <div>
                    <Buttons
                        classname="header__button-inventory header__button--selector"
                        name="SELECT ALL"
                        // handleSelectAll={handleSelectAll}
                    />
                    <span className="header__span">
                        {`selected ${selectedProducts.length} out of ${productList.length} products`}
                    </span>
                    {selectedProducts.length > 0 ?
                        <Buttons
                            classname="header__button-inventory header__button--selector"
                            name="CLEAR SELECTED"
                            // handleClearAll={handleClearAll}
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
                </div>

            </nav>

            <div className="main__nav-sort">
                <p>Sort By:</p>
                <SortHtml setSortType={setSortType}/>
            </div>


            <section className="main__catalog">
                <Grid container spacing={2}>
                    {
                        productList.map( singleProduct => {

                                return (<Grid item
                                              container
                                              justify={"center"}
                                              alignItems="center"
                                              direction="row"
                                              xs={12}
                                              md={6}
                                              lg={3}

                                >
                                    <Link style={{textDecoration: "none"}} to={`/catalog/${singleProduct.id}`}>
                                        <Paper elevation={0} style={{borderRadius: 12, marginLeft: 20}}>

                                            <SingleProduct
                                                image={singleProduct.imageUrl}
                                                productId={singleProduct.id}
                                                price={singleProduct.price}
                                                title={singleProduct.title}
                                                isChecked={singleProduct.isChecked}
                                                // handleCheckProduct={() => handleCheckProduct(singleProduct.id)}
                                            />

                                        </Paper>
                                    </Link>

                                </Grid>)

                            }
                        )
                    }
                </Grid>
            </section>
            <Modal  isOpen={id} />
        </div>

    );
};
export default Catalog;