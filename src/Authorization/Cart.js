import {useEffect, useState} from "react";
import {cart, login, updateCart} from "../Common/API";
import SingleProduct from "../Common/SingleProduct";
import {deleteCartItem} from "../Common/API";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Icon,
    Paper, Input,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {TextField, Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



toast.configure();

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: "90vw",
    },
    container: {
        marginTop: 20,
        width: "90vw",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "7vw",
    },
    img: {
        width: 80,
    },
    cells: {
        color: "#303856"
    },
    secondTable: {
        maxWidth: "60vw",
        marginTop: 25,
        display: "inline",
        marginBottom: 25,
        borderTop: "1px solid #c7c7c7"
    },
    secondCells: {
        color: "#303856",
        paddingLeft: 25,
    },
    label: {
        color: "red",
    },
    thirdTable: {
        display: "inline",
    },
    plusAndMinus: {
        alignItems: "right",

    },
    plusAndMinusTableCell: {
        borderBlockStyle: "none",
    },
    icons: {
        fontSize: 14,
        borderBlockStyle: "none",
    }
});

const Cart = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartProducts)

    useEffect(() => {
        cart()
            .then(res => {
                dispatch({
                    type: "PRODUCTS_ARRIVED",
                    payload: res
                });
            })
    }, []);

    const handleIncreaseQty = (id, qty) => {
        updateCart(id, qty + 1).then(res =>
            dispatch({
                type: "CART_UPDATED",
                payload: res
            }))
    };
    const handleDecreaseQty = (id, qty) => {
        updateCart(id, qty - 1).then(res => {
            dispatch({
                type: "CART_UPDATED",
                payload: res
            });
        })
    };

    const notify = () => {
        toast.warn("Product Deleted", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000,
        })
    }
    return(
        <div className={classes.wrapper}>
            <h2 className="cart__header">SHOPPING CART (1)</h2>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.cells}><b>ITEM PHOTO</b></TableCell>
                            <TableCell className={classes.cells}><b>NAME</b></TableCell>
                            <TableCell className={classes.cells}><b>DESCRIPTION</b></TableCell>
                            <TableCell className={classes.cells}><b>PRICE</b></TableCell>
                            <TableCell align="center" className={classes.cells}><b>QTY</b></TableCell>
                            <TableCell className={classes.cells}><b>DELETE</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartProducts.cartItem &&
                            cartProducts.cartItem.items.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        <img className={classes.img} src={item.image}/>
                                    </TableCell>
                                    <TableCell align="left">{item.title}</TableCell>
                                    <TableCell align="left">{item.description}</TableCell>
                                    <TableCell align="left">{item.price}$</TableCell>
                                    <TableCell className={classes.plusAndMinus} align="right">
                                        <TableCell
                                            className={classes.plusAndMinusTableCell}
                                        >
                                            <Button
                                                value="plus"
                                                onClick={() => {handleIncreaseQty(item.id, item.qty)}}
                                            >
                                                <AddIcon className={classes.icons}/>
                                            </Button>
                                        </TableCell>
                                        <TableCell className={classes.plusAndMinusTableCell}>{item.qty}</TableCell>
                                        <TableCell
                                            className={classes.plusAndMinusTableCell}
                                        >
                                                <Button
                                                    disabled={item.qty < 2}
                                                    value="minus"
                                                    onClick={() => {handleDecreaseQty(item.id, item.qty)}}
                                                >
                                                    <RemoveIcon className={classes.icons}/>
                                                </Button>
                                        </TableCell>
                                    </TableCell>
                                    <TableCell align="center" style={{paddingRight: 30}}>
                                        <Button onClick={() => deleteCartItem(item.id)}>
                                            <RemoveShoppingCartOutlinedIcon onClick={notify}/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper} className={classes.secondTable}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.cells}><b>SHIPPING DETAILS</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableRow>
                                <TableCell className={classes.secondCells}>First Name<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>Last name<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>Email<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>Phone<label className={classes.label}>*</label></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>

                            </TableRow>
                        </TableRow>
                        <TableRow>
                            <TableRow>
                                <TableCell className={classes.secondCells}>Country<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>City<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>Street Address<label className={classes.label}>*</label></TableCell>
                                <TableCell className={classes.secondCells}>Zip<label className={classes.label}>*</label></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        id="outlined-size-small"
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default Cart;