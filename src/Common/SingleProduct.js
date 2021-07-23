import Checkbox from "./Checkbox";
import Buttons from "./Buttons";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {addToCart, deleteCartItem} from "./API";
import {useDispatch, useSelector} from "react-redux";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {deleteProduct, updateProduct} from "./API";
import {useHistory} from "react-router-dom";

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

    const [style, setStyle] = useState({display: "none"});

    const classes = useStyles();
    const count = useSelector(state => state.counter.clickCount);
    const history = useHistory();

    const handleEditProduct = (id) => {
        history.push(`product/${id}`)
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
                    onClick={() => addToCart(productId, count)}
                >
                    Add To Inventory
                </Button>
                <DeleteOutlineOutlinedIcon
                    style={style}
                    className="single-product__delete-icon"
                    onClick={() => deleteProduct(productId)}
                />
                <EditOutlinedIcon
                    style={style}
                    className="single-product__edit-icon"
                    // onClick={() => handleEditProduct(productId)}
                />
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