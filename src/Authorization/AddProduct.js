import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getProduct, updateProduct, addProduct} from "../Common/API";
import {Formik, Form, Field, ErrorMessage} from "formik"
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup"

const useStyles = makeStyles({

    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputs: {
        width: 330,
        height: 30,
    }
});

const addProductValidation = yup.object().shape({
    title: yup.string().min(1).max(20).required(),
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
        <>
            <p>{productId ? "Edit" : "Add"} product </p>
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
                        component="textarea"
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
                    >
                        Submit
                    </Button>
                </Form>

            </Formik>
        </>
    )

};

export default AddProduct;