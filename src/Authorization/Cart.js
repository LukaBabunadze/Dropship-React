import {useEffect, useState} from "react";
import {cart} from "../Common/API";
import SingleProduct from "../Common/SingleProduct";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Icon,
    Paper,
} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1200,
    },
    container: {
        minWidth: 650,
        maxWidth: 1200,
    },
    wrapper: {
        display: "flex",
        justifyContent: "center"
    },
    img: {
        width: 80,
    }
});

const Cart = () => {
    const classes = useStyles();
    const count = useSelector(state => state.counter.clickCount)
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        cart()
            .then(res => {
            setCartData(res);
            console.log(cartData)
        })
    }, []);

    return(
        <div className={classes.wrapper}>
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ITEM PHOTO</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>DESCRIPTION</TableCell>
                            <TableCell>PRICE</TableCell>
                            <TableCell>ITEM ID</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartData.cartItem &&
                            cartData.cartItem.items.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        <img className={classes.img} src={item.image}/>
                                    </TableCell>
                                    <TableCell align="left">{item.title}</TableCell>
                                    <TableCell align="left">{item.description}</TableCell>
                                    <TableCell align="left">{item.price}$</TableCell>
                                    <TableCell align="left">ID: {item.id}</TableCell>
                                    <TableCell align="left"><span>X</span></TableCell>
                                </TableRow>
                            )
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>



        // <>
        //     {
        //         cartData.cartItem &&
        //         cartData.cartItem.items.map(item =>
        //             <SingleProduct
        //                 image={item.image}
        //                 title={item.title}
        //                 productId={item.id}
        //                 price={item.price}
        //                 qty={item.qty}
        //             />)
        //     }
        // </>
    );
};
export default Cart;