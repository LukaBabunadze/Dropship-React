import Checkbox from "../Checkbox";
import Buttons from "../Buttons";
import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {addToCart, deleteCartItem} from "./API";


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

const SingleProduct = ({
                           productId,
                           image,
                           title,
                           price,
                           qty,
                           isChecked,
                           handleCheckProduct,

}) => {

    const classes = useStyles();

    return (
            <div key={productId} className="catalog__item">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={(e) => addToCart(productId, 1, e)}
                    >
                        Add To Inventory
                    </Button>
                {
                    qty &&
                        <Button
                            className={classes.deleteButton}
                            variant="contained"
                            color="primary"
                            onClick={() => deleteCartItem(productId)}
                        >
                            Delete From Cart
                        </Button>
                }
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