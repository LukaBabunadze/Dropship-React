import {Button} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
    button: {
        backgroundColor: "#61D5DF",
        marginLeft: "auto",
        marginRight: 30,
        height: 30,
        width: 100,
        fontSize: 12,
        whiteSpace: "nowrap",
    }
})

const SortHtml =({setSortType}) => {

    const classes = useStyle();
    const token = localStorage.getItem("token")
    const histyory = useHistory();

    const handleAddProduct = () => {
        histyory.push("/product")
    }
    return(
        <>
            <select className="main__nav-select" id="sort" onChange={(e) => setSortType(e.target.value)}>
                <option className="nav-select__option">New Arrivals</option>
                <option className="nav-select__option" value="highToLow">Price: High To Low</option>
                <option className="nav-select__option" value="lowToHigh">Price: Low To High</option>
                <option className="nav-select__option" value="aToZ">Title: A To Z</option>
                <option className="nav-select__option" value="zToA">Title: Z To A</option>
            </select>
            {
                token &&
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleAddProduct}
                >
                    Add Product
                </Button>
            }
        </>
    );
};

export default SortHtml;