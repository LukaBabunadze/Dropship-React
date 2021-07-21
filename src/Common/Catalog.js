import React from "react";
import {useEffect, useState} from "react";
import SingleProduct from "./SingleProduct";
import SortHtml from "./SortHtml";
import Modal from "./Modal"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import {Switch, Route, Link, useParams, useHistory} from "react-router-dom";
import {products as productsAPI} from "./API";
import {useDispatch, useSelector} from "react-redux";
import Header from "../Layout/Header";
import {Button, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {login} from "./API";


const Catalog = () => {

    const productList = useSelector(state => state.products.productList)
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('search...');
    const [open, setOpen] = useState(false);
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
                    type: "PRODUCTS_SORTED",
                    payload: [...productList].sort((a, b) => {
                            return (b[sortProperty] - a[sortProperty]);
                        }
                    )
                })
            } else if (type === "lowToHigh") {
                dispatch({
                    type: "PRODUCTS_SORTED",
                    payload: [...productList].sort((a, b) => {
                        return (a[sortProperty] - b[sortProperty])
                    })
                })
            } else if (type === "aToZ") {
                dispatch({
                    type: "PRODUCTS_SORTED",
                    payload: [...productList].sort((a, b) => {
                        if((b[sortProperty] > a[sortProperty])){
                            return -1;
                        }
                    })
                })
            } else if (type === "zToA") {
                dispatch({
                    type: "PRODUCTS_SORTED",
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
            payload: JSON.parse(localStorage.getItem("products")).filter(item => item.title.toLowerCase().includes(inputText.toLowerCase()))
        });
    }





    // *** Select All / Clear All ***
    const handleCheckProduct = (productId) => {
        const checkedProducts = productList.map(product =>
            product.id === productId
                ? {...product, isChecked: !product.isChecked}
                : product
        );
        dispatch({
            type: "PRODUCTS_CHECKED",
            payload: checkedProducts,
        })
    };

    useEffect(() => {
        setSelectedProducts(productList.filter((product) => product.isChecked));
    }, [productList])


    const handleClearAll = () => {
        dispatch({
            type: "CLEAR_ALL",
            payload: JSON.parse(localStorage.getItem("products")).map((product) => ({...product, isChecked: false})),
        })
    }

    const handleSelectAll = () => {
        dispatch({
            type: "SELECT_ALL",
            payload: JSON.parse(localStorage.getItem("products")).map((product) => ({...product, isChecked: true})),
        })
    };

    // *** Success Message ***
    useEffect(() => {
        setOpen(true);
    }, [login])

    const handleClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    // *** Modal Id ***

    const {id} = useParams();



    return (

        <div>
            <Header
                handleSelectAll={handleSelectAll}
                selectedProducts={selectedProducts}
                productList={productList}
                handleClearAll={handleClearAll}
                inputText={inputText}
                changeInput={changeInput}
                searchedProducts={searchedProducts}
            />
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
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>

    );
};
export default Catalog;