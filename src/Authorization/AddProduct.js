import {useEffect, useState} from "react";
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import {getProduct, updateProduct, addProduct} from "../Common/API";
import {Formik, Form, Field, ErrorMessage} from "formik"
import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup"

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
    inputs: {
        borderBlockEndStyle: "none",
        borderBlockStartStyle: "none",
        borderStyle: "none",
        m: 1,
        border: 1,
        width: 330,
        height: 30,
        borderRadius: 8,
    },
    title: {
        width: 350,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: 350,
        height: 300,
    },
    button: {
        display: "block",
        alignSelf: "center",
        marginTop: 20,
    }
});

const addProductValidation = yup.object().shape({
    title: yup.string().min(1).max(15).required(),
    description: yup.string().min(5).max(255).required(),
    price: yup.number().integer().min(1).required(),
    image: yup.string().url().required(),
})


const AddProduct = () => {

    const classes = useStyles();
    const { productId } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        if(productId) {
            getProduct(productId).then(res => {
                setProduct(res);
            })
        }
    }, [productId]);

    console.log(product);

    const handleSubmit = values => {
      if (productId) {
          updateProduct(productId, values).then(res => {
              alert("update successful")
          }).catch (err => {alert(err.message)})
      }  else {
          addProduct(values).then(res => {
              alert("product was added successfully");
          }).catch (err => {alert(err.message)})
      }
    };

    return (
        <div  className={classes.main}>
            <Dialog open={true}>
                <DialogTitle className={classes.title}>
                    {productId ? "Edit" : "Add"} product
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
                                className={classes.inputs}
                            />
                            <ErrorMessage name="title" component="div"/>
                            <Field
                                placeholder="Description"
                                name="description"
                                className={classes.inputs}
                            />
                            <ErrorMessage name="description" component="div"/>
                            <Field
                                placeholder="Price"
                                name="price"
                                className={classes.inputs}
                            />
                            <ErrorMessage name="price" component="div"/>
                            <Field
                                placeholder="Image URL"
                                name="imageUrl"
                                className={classes.inputs}
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