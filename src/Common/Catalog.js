import React from "react";
import {useEffect, useState} from "react";
import SingleProduct from "./Common/SingleProduct";
import searchicon from "./Icons/searchicon.png"
import Buttons from "./Common/Buttons";
import axios from "axios";
import SortHtml from "./Common/SortHtml";
import Modal from "./Common/Modal"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {makeStyles} from "@material-ui/core/styles"
import {Switch, Route, Link, useParams, useHistory} from "react-router-dom";
import {products as productsAPI} from "./Common/API";
import {useDispatch, useSelector} from "react-redux";


const Catalog = () => {

    const productList = useSelector(state => state.products.productList)
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
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
            const sorted = [...products].sort((a, b) => {if (type === "highToLow") {
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
            setProducts(sorted);
        };
        sortArray(sortType);
    }, [sortType]);




    // *** Axios Get Data ***

    useEffect(() => {
        productsAPI().then(res => {
            setProducts(res);
        })
    }, [])




    // *** SearCh ***

    const changeInput = (e) => {
        setInputText(e.target.value);
    }

    const searchedProducts = () => {
        setProducts(products.filter(item => item.title.toLowerCase().includes(inputText.toLowerCase())));
    }



    // *** Select All / Clear All ***

    const handleCheckProduct = (productId) => {
        const checkedProducts = products.map(product =>
            product.id === productId
                ? {...product, isChecked: !product.isChecked}
                : product
        );
        setProducts(checkedProducts);

    };

    useEffect(() => {
        setSelectedProducts(products.filter((product) => product.isChecked));
    }, [products])


    const handleClearAll = () => {
        setProducts(products.map((product) => ({...product, isChecked: false})))
    }

    const handleSelectAll = () => {
        setProducts(products.map((product) => ({...product, isChecked: true})))
    };




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
                    <Buttons classname="header__button-inventory header__button--selector" name="SELECT ALL" handleSelectAll={handleSelectAll}/>
                    <span className="header__span">{`selected ${selectedProducts.length} out of ${products.length} products`}</span>
                    {selectedProducts.length > 0 ? <Buttons classname="header__button-inventory header__button--selector" name="CLEAR SELECTED" handleClearAll={handleClearAll}/> : ""}
                </div>

                <div className="main__nav-search-bar">
                    <input type="text" className="search-bar" placeholder={inputText} id="searchQuery" onChange={changeInput}/>
                    <button id="searchButton" onClick={searchedProducts}><img src={searchicon}/></button>
                    <Buttons classname="header__button-inventory" name="ADD TO INVENTORY"/>
                </div>

            </nav>

            <div className="main__nav-sort">
                <p>Sort By:</p>
                <SortHtml setSortType={setSortType}/>
            </div>


            <section className="main__catalog">
                <Grid container spacing={2}>
                    {
                        products.map( singleProduct => {

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
                                                handleCheckProduct={() => handleCheckProduct(singleProduct.id)}
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