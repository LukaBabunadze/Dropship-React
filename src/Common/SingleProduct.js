import Checkbox from "./Checkbox";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {addToCart} from "./API";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const useStyles = makeStyles({
    button: {
        position: "absolute",
        height: 30,
        width: 100,
        fontSize: 9,
        marginLeft: 165,
        marginBottom: 255,
        backgroundColor: "#61D5DF",
    },
    deleteButton: {
        position: "absolute",
        height: 30,
        width: 100,
        fontSize: 9,
        marginLeft: 165,
        marginBottom: 180,
        backgroundColor: "red",
    }
});

toast.configure();
const SingleProduct = ({
                           productId,
                           image,
                           title,
                           price,
                           qty,
                           isChecked,
                           handleCheckProduct,

}) => {

    const [style, setStyle] = useState({display: "none"});

    const classes = useStyles();
    const count = useSelector(state => state.counter.clickCount);

    const successToast = () => {
        toast.success("Product Added to Cart", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 2000,
        })
    }

    return (
            <div
                onMouseOver={e => {setStyle({display: "flex"})}}
                onMouseLeave={e => {setStyle({display: "none"})}}
                key={productId}
                className="catalog__item"
            >
                <Button
                    style={style}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => addToCart(productId, count) && successToast()}
                >
                    Add To Inventory
                </Button>
                <Checkbox
                    isChecked={isChecked}
                    handleCheckProduct={handleCheckProduct}
                    checked={isChecked}
                />
                <div className="catalog__item-photo" >
                    <img src={image} alt="img.."/>
                </div>
                <div className="catalog__item-name" >
                    {title}
                </div>
                <div className="catalog__item-price" >
                    {price}$
                </div>
                {qty && <p>Quantity: {qty}</p>}
            </div>
    );
};

export default SingleProduct;