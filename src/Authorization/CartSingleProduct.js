import {makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core";


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
    }
});

const CartSingleProduct = ({product}) => {
    const classes = useStyles();
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

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CartSingleProduct;