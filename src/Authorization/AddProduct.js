import {useEffect, useState} from "react";
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import {getProduct, updateProduct, addProduct, products as productsAPI} from "../Common/API";
import {Formik, Form, Field, ErrorMessage} from "formik"
import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    main: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",

    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: 20,
    },
    title: {
        paddingTop: 40,
        width: 350,
        color: "#2B2C41",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    content: {
        width: 350,
        height: 370,
    },
    button: {
        display: "inline",
        alignSelf: "center",
        marginTop: 20,
        width: 120,
        backgroundColor: "#2B2C41"
    },
    mainTitle: {
        fontSize: 18,
        alignSelf: "center",
        marginRight: 25,
        color: "#2B2C41",
    },
    closeButton: {
        alignSelf: "flex-end",
        backgroundColor: "#ededed",
    }
});

const addProductValidation = yup.object().shape({
    title: yup.string().min(1).max(15).required(),
    description: yup.string().min(5).max(255).required(),
    price: yup.number().integer().min(1).required(),
    image: yup.string().url().required(),
})

toast.configure();
const AddProduct = () => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const successToast = (text) => {
        toast.success(`${text}`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000
        })
    };
    const errorToast = (message) => {
        toast.error(`${message}`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000
        })
    }
    useEffect(() => {
        if(productId) {
            getProduct(productId).then(res => {
                setProduct(res);
            })
        }
    }, [productId]);


    const handleSubmit = values => {
      if (productId) {
          updateProduct(productId, values)
              .then(res => {
              successToast("Product Updated");
          })
              .catch (err => {errorToast("Something Went Wrong")})
      }  else {
          addProduct(values)
              .then(res => {
              successToast("Product Added");
          })
              .catch (err => {errorToast("Something Went Wrong")})
      }
    };

    const modalClose = () => {
        productsAPI().then(res => {
            dispatch({
                type: "PRODUCT_CHANGED",
                payload: res,
            });
            localStorage.setItem("products", JSON.stringify(res))
        })
        history.push("/catalog")
    };

    return (
        <div  className={classes.main}>
            <Dialog open={true}>
                <DialogTitle className={classes.title}>
                    <Button variant="outlined" className={classes.mainTitle}><b>{productId ? "EDIT" : "ADD"} PRODUCT</b></Button>
                    <Button onClick={modalClose} className={classes.closeButton}>X</Button>
                </DialogTitle>
                <DialogActions className={classes.content}>
                    <Formik
                        enableReinitialize
                        initialValues={productId ? {
                                title: product.title,
                                description: product.description,
                                price: product.price,
                                imageUrl: product.imageUrl,

                            }
                            :
                            {
                                title: "",
                                description: "",
                                price: "",
                                imageUrl: "",
                            }
                        }
                        onSubmit={handleSubmit}
                        // validationSchema={addProductValidation}
                    >
                        <Form className={classes.form}>
                            <Field
                                placeholder="Title"
                                name="title"
                                className="add-product__inputs"
                            />
                            <ErrorMessage name="title" component="div"/>
                            <Field
                                helperText="blaa"
                                placeholder="Description"
                                component="textarea"
                                name="description"
                                className="add-product__text-area"
                            />
                            <ErrorMessage name="description" component="div"/>
                            <Field
                                placeholder="Price"
                                name="price"
                                className="add-product__inputs"
                            />
                            <ErrorMessage name="price" component="div"/>
                            <Field
                                placeholder="Image URL"
                                name="imageUrl"
                                className="add-product__inputs"
                            />
                            <ErrorMessage name="imageUrl" component="div"/>
                            <Button
                                type="submit"
                                color={"primary"}
                                variant={"contained"}
                                className={classes.button}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </DialogActions>
            </Dialog>
        </div>
    )

};

export default AddProduct;